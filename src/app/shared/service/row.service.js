import { Injectable } from '@angular/core';
import collection from 'utils/collection.util.js';
import { Card } from 'model/card.model';
import { Row } from 'model/row.model';
import { Todo } from 'model/todo.model';
import { ServerDataService } from './server-data.service';

@Injectable()
export class RowService {
  rows = [];

  dataUrl = 'rows';

  static get parameters() { return [[ServerDataService]]; }
  constructor(serverData) {
    this.serverData = serverData;
  }

  getServerData() {
    this.serverData.get('rows-expanded')
      .subscribe(
        res => this.rows = this.normalizeResponse(res),
        err => this.rows = [] // TODO implement error handling
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
        err => {/* TODO handle error*/}
    );
  }

  removeRow(row) {
    this.serverData.delete(this.dataUrl, row.id)
      .subscribe(
        res => this.rows = collection.removeItem(this.rows, row),
        err => {/* TODO handle erro*/}
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
        err => {/* TODO handle erro*/}
    );
  }
}