import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { CardHolder } from './card-holder.model';
import { Todo } from '../../todos/shared/todo.model';
import { TodoList } from '../../todos/shared/todo-list.model';

@Injectable()
export class CardsService {
  cards = [];

  static get parameters() {
    return [[Http]];
  }

  constructor(http) {
    this.http = http;
  }

  getServerData() {
    this.http.get('http://localhost:3000/todos').toPromise()
      .then(res => this.getCards(res.json()))
      .catch((err) => {
        console.warn(err);
        this.cars = [];
      })
  }

  getCards(todos) {
    this.http.get('http://localhost:3000/cardHolders?_embed=todoLists').toPromise()
      .then(res => this.cards = this.normalizeCardsResponse(res.json(), todos))
      .catch((err) => {
        console.warn(err);
        this.cars = [];
      });
  }

  normalizeCardsResponse(cards = [], todos = []) {
    return cards.map(
      ({id, title, todoLists = []} = {}) => {
        todoLists = todoLists.map(todoList => {
          const todoModels = todos.filter(todo => todo.todoListId === todoList.id)
                                  .map(todo => new Todo(todo.description, todo.id, todo.status));

          return new TodoList(todoList.title, todoList.id, todoModels)
        });

        return new CardHolder(title, id, todoLists);
      }
    );
  }

  addCardHolder(title = '') {
    this.cards = [
      ...this.cards,
      new CardHolder(title)
    ];
  }

  removeCardHolder(cardHolder) {
    const cardIndex = this.cards.indexOf(cardHolder);

    this.cards = [
      ...this.cards.slice(0, cardIndex),
      ...this.cards.slice(cardIndex + 1)
    ];
  }

  addTodoList(cardHolder, title = '') {
    const cardIndex = this.cards.indexOf(cardHolder);

    if (cardHolder) {
      cardHolder.addTodoList(new TodoList(title));

      this.cards = [
        ...this.cards.slice(0, cardIndex),
        cardHolder,
        ...this.cards.slice(cardIndex + 1)
      ];
    }
  }

  removeTodoList(cardHolder, todoList) {
    const cardIndex = this.cards.indexOf(cardHolder);

    if (cardHolder) {
      cardHolder.removeTodoList(todoList);

      this.cards = [
        ...this.cards.slice(0, cardIndex),
        cardHolder,
        ...this.cards.slice(cardIndex + 1)
      ];
    }
  }

  updateTodoListTitle(cardHolder, {todoList, title = ''}) {
    const cardIndex = this.cards.indexOf(cardHolder);

    if (cardHolder) {
      cardHolder.updateTodoList(todoList, title);

      this.cards = [
        ...this.cards.slice(0, cardIndex),
        cardHolder,
        ...this.cards.slice(cardIndex + 1)
      ];
    }
  }

  //FIXME investigate immutable way
  updateCardHolderTitle(cardHolder, title) {
    const cardIndex = this.cards.indexOf(cardHolder);

    if (cardHolder) {
      cardHolder.title = title;
      this.cards = [
        ...this.cards.slice(0, cardIndex),
        cardHolder,
        ...this.cards.slice(cardIndex + 1)
      ];
    }
  }
}