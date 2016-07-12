import { Injectable } from '@angular/core';
import { Card } from '../model/card.model';
import { Todo } from '../model/todo.model';
import { TodoList } from '../model/todo-list.model';
import { ServerDataService } from './server-data.service';

@Injectable()
export class CardsService {
  cards = [];

  static get parameters() { return [[ServerDataService]]; }
  constructor(serverData) {
    this.serverData = serverData;
  }

  getCards() {
    this.serverData.getCards()
      .subscribe(
        res => this.cards = this.normalizeCardsResponse(res),
        err => this.cars = [] // TODO implement error handling
      );
  }

  normalizeCardsResponse(cards = [], todos = []) {
    return cards.map(
      ({id, title, todoLists = []} = {}) =>
        new Card(title, id, todoLists)
    );
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

  addTodoList(card, title = '') {
    const cardIndex = this.cards.indexOf(card);

    if (card) {
      card.addTodoList(new TodoList(title));

      this.cards = [
        ...this.cards.slice(0, cardIndex),
        card,
        ...this.cards.slice(cardIndex + 1)
      ];
    }
  }

  removeTodoList(card, todoList) {
    const cardIndex = this.cards.indexOf(card);

    if (card) {
      card.removeTodoList(todoList);

      this.cards = [
        ...this.cards.slice(0, cardIndex),
        card,
        ...this.cards.slice(cardIndex + 1)
      ];
    }
  }

  updateTodoListTitle(card, {todoList, title = ''}) {
    const cardIndex = this.cards.indexOf(card);

    if (card) {
      card.updateTodoList(todoList, title);

      this.cards = [
        ...this.cards.slice(0, cardIndex),
        card,
        ...this.cards.slice(cardIndex + 1)
      ];
    }
  }

  //FIXME investigate immutable way
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