import { Injectable } from '@angular/core';
import { Card } from '../model/card.model';
import { TodoList } from '../model/todo-list.model';
import { Todo } from '../model/todo.model';
import { ServerDataService } from './server-data.service';

@Injectable()
export class BoardService {
  cards = [];

  static get parameters() { return [[ServerDataService]]; }
  constructor(serverData) {
    this.serverData = serverData;
  }

  getServerData() {
    this.serverData.get('cards-expanded')
      .subscribe(
        res => this.loadTodos(res),
        err => this.cars = [] // TODO implement error handling
      );
  }

  loadTodos(cards = []) {
    this.serverData.get('todos')
      .subscribe(
        res => this.cards = this.normalizeResponse(cards, res),
        err => this.cards = []
      );
  }

  normalizeResponse(cards = [], todos = []) {
    const createTodo = ({id, todoListId, description, status}) =>
      new Todo(id, todoListId, description, status);

    const createTodoList = ({id, cardId, title}, todos) =>
      new TodoList(id, cardId, title, todos)

    return cards.map(({id, title, todoLists}) => { // create instances of Card model
      todoLists = todoLists.map(todoList => { // create instances of TodoList model
        const normalizedTodos = todos
          .filter(({todoListId}) => todoListId === todoList.id) // find todos for current todoList
          .map(todo => createTodo(todo)); // create instances of Todo model

        return createTodoList(todoList, normalizedTodos);
      });

      return new Card(id, title, todoLists);
    });
  }

  addCard(title = '') {
    const data = { title, todoLists: []};

    this.serverData.post('cards', data)
      .subscribe(({id, title, todoLists}) => {
        const card = new Card(id, title, todoLists);
        this.cards = [...this.cards, card];
      },
      err => {/* TODO handle error*/}
    );
  }

  removeCard(card) {
    this.serverData.delete('cards', card.id)
      .subscribe(
        res => {
          const cardIndex = this.cards.indexOf(card);

          this.cards = [
            ...this.cards.slice(0, cardIndex),
            ...this.cards.slice(cardIndex + 1)
          ];
        },
        err => {/* TODO handle erro*/}
    );
  }

  updateCardTitle(card, title) {
    const data = {
      title,
      todoLists: card.todoLists.map(({id}) => id)
    };

    this.serverData.put('cards', card.id, data)
      .subscribe(({id, title, todoLists}) => {
        const cardIndex = this.cards.indexOf(card);

        if (card) {
          card.title = title;
          this.cards = [
            ...this.cards.slice(0, cardIndex),
            card,
            ...this.cards.slice(cardIndex + 1)
          ];
        }
      },
      err => {/* TODO handle erro*/}
    );
  }
}