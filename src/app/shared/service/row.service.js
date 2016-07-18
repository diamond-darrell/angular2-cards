import { Injectable } from '@angular/core';
import collection from 'utils/collection.util.js';
import { Card } from 'model/card.model';
import { Row } from 'model/row.model';
import { Todo } from 'model/todo.model';
import { ServerDataService } from './server-data.service';
import { FlashMessageService } from 'service/flash-message.service';

@Injectable()
export class RowService {
  rows = [];

  dataUrl = 'rows';

  static get parameters() { return [[ServerDataService], [FlashMessageService]]; }
  constructor(serverData, flashMessageService) {
    this.serverData = serverData;
    this.flashMessageService = flashMessageService;
  }

  getServerData() {
    const request = this.serverData.get('rows-expanded');

    request.subscribe(
      res => this.rows = this.normalizeResponse(res),
      err => {
        this.rows = [];
        this.flashMessageService.showMessage('error', `Cannot load data. ${err}`);
      }
    );
  }

  normalizeResponse(rows = []) {
    const createTodo = ({description, status}) => new Todo(description, status);

    const createCard = ({id, rowId, title, todos}) => {
      todos = todos.map(todo => createTodo(todo))
      return new Card(id, rowId, title, todos);
    }

    return rows.map(({id, title, cards}) => {
      cards = cards.map(card => createCard(card));

      return new Row(id, title, cards);
    });
  }

  addRow(title = '') {
    const data = { title };

    this.serverData.post(this.dataUrl, data)
      .subscribe(
        ({id, title}) => {
          this.rows = collection.addItem(this.rows, new Row(id, title));
        },
        err => this.flashMessageService.showMessage('error', `Cannot add new row. ${err}`)
    );
  }

  removeRow(row) {
    this.serverData.delete(this.dataUrl, row.id)
      .subscribe(
        res => this.rows = collection.removeItem(this.rows, row),
        err => this.flashMessageService.showMessage('error', `Cannot remove row. ${err}`)
      );
  }

  updateRowTitle(row, title) {
    const data = { title };

    this.serverData.put(this.dataUrl, row.id, data)
      .subscribe(
        ({title}) => {
          row.title = title;
          this.rows = collection.updateItem(this.rows, row);
        },
        err => this.flashMessageService.showMessage('error', `Cannot set row's title. ${err}`)
    );
  }
}