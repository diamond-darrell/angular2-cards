import { Injectable } from 'angular2/core';
import { CardHolder } from './card-holder.model';
import { TodoList } from '../../todos/shared/todo-list.model';

@Injectable()
export class CardsService {
  cards = [new CardHolder('Test')];
  todoLists = [];

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
      cardHolder.todoLists.push(new TodoList(title));

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
      const newTodoList = Object.assign({}, todoList, {title});

      cardHolder.updateTodoList(todoList, newTodoList);

      this.cards = [
        ...this.cards.slice(0, cardIndex),
        cardHolder,
        ...this.cards.slice(cardIndex + 1)
      ];
    }
  }

  getCard(id) {
    return this.cards.find(card => card.id === cardHolderId)
  }

  getTodoLists(cardHolderId) {
    const card = this.getCard(cardHolderId);

    if (card) {
      return card.todoLists;
    }

    return [];
  }
}