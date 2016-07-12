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
    return cards.map(({id, title, todoLists}) => {
      todoLists = todoLists.map(todoList => {
        todos = todos.filter(({todoListId}) => todoListId === todoList.id)
                    .map(todo => new Todo(todo.id, todo.description, todo.status));

        return new TodoList(todoList.id, todoList.title, todos)
      });

      return new Card(id, title, todoLists);
    });
  }

  addCard(title = '') {
    this.cards = [
      ...this.cards,
      new Card(title)
    ];
  }

  removeCard(card) {
    const cardIndex = this.cards.indexOf(card);

    this.cards = [
      ...this.cards.slice(0, cardIndex),
      ...this.cards.slice(cardIndex + 1)
    ];
  }

  updateCardTitle(card, title) {
    const cardIndex = this.cards.indexOf(card);

    if (card) {
      card.title = title;
      this.cards = [
        ...this.cards.slice(0, cardIndex),
        card,
        ...this.cards.slice(cardIndex + 1)
      ];
    }
  }
}