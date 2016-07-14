import { Injectable } from '@angular/core';
import { Todo } from '../model/todo.model';
import { Card } from '../model/card.model';
import { ServerDataService } from './server-data.service';

@Injectable()
export class CardService {
  dataUrl = 'cards';

  static get parameters() { return [[ServerDataService]]}

  constructor(serverData) {
    this.serverData = serverData;
  }

  addCard(row, title = '') {
    const data = {
      title,
      rowId: row.id,
      todos: []
    };

    this.serverData.post(this.dataUrl, data)
      .subscribe(
        ({ id, title, todos }) => {
          row.addCard(new Card(id, row.id, title, todos));
        },
        err => {}
      );
  }

  removeCard(row, card) {
    this.serverData.delete(this.dataUrl, card.id)
      .subscribe(
        res => {
          row.removeCard(card);
        },
        err => {}
      );
  }

  setCardTitle(row, {card, title = ''}) {
    const data = {
      title,
      rowId: card.rowId,
      todos: card.todos.map(todo => todo.toPOJO())
    };

    this.serverData.put(this.dataUrl, card.id, data)
      .subscribe(
        res => row.updateCard(card, title),
        err => {}
      );
  }
}