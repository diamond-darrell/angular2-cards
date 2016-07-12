import { Injectable } from '@angular/core';
import { Card } from '../model/card.model';
import { Todo } from '../model/todo.model';
import { TodoList } from '../model/todo-list.model';
import { ServerDataService } from './server-data.service';

@Injectable()
export class CardService {
  static get parameters() { return [[ServerDataService]]; }
  constructor(serverData) {
    this.serverData = serverData;
  }
}