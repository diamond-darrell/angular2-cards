import { Injectable } from '@angular/core';
import { Card } from 'model/card/card.model';
import { ServerDataService } from 'service/server-data/server-data.service';
import { FlashMessageService } from 'service/flash-message.service';

@Injectable()
export class CardService {
  dataUrl: string = 'cards';

  constructor(serverData: ServerDataService, flashMessageService: FlashMessageService) {
    this.serverData = serverData;
    this.flashMessageService = flashMessageService;
  }

  addCard(row, cardTitle = '') {
    const data = {
      title: cardTitle,
      rowId: row.id,
      todos: [],
    };

    this.serverData.post(this.dataUrl, data)
      .subscribe(
        ({ id, title, todos }) => {
          row.addCard(new Card(id, row.id, title, todos));
        },
        err => this.flashMessageService.showMessage('error', `Cannot add card. ${err}`)
      );
  }

  removeCard(row, card) {
    this.serverData.delete(this.dataUrl, card.id)
      .subscribe(
        () => row.removeCard(card),
        err => this.flashMessageService.showMessage('error', `Cannot remove card. ${err}`)
      );
  }

  setCardTitle(row, { card, title = '' }) {
    const data = {
      title,
      rowId: card.rowId,
      todos: card.todos.map(todo => todo.toPOJO()),
    };

    this.serverData.put(this.dataUrl, card.id, data)
      .subscribe(
        () => row.updateCard(card, title),
        err => this.flashMessageService.showMessage('error', `Cannot set card's title. ${err}`)
      );
  }
}
