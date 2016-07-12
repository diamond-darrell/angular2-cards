import { Injectable } from '@angular/core';
import { Todo } from '../model/todo.model';
import { TodoList } from '../model/todo-list.model';
import { ServerDataService } from './server-data.service';

@Injectable()
export class CardService {
  static get parameters() { return [[ServerDataService]]; }
  constructor(serverData) {
    this.serverData = serverData;
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
}