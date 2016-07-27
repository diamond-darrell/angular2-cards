import { Injectable } from '@angular/core';

import { Todo } from 'model/todo';
import { Card } from 'model/card';

import { collection } from 'utils/collection';

import { ServerDataService } from 'service/server-data';
import { FlashMessageService } from 'service/flash-message';

@Injectable()
export class TodoService {
  dataUrl: string = 'cards';

  constructor(serverData: ServerDataService, flashMessageService: FlashMessageService): void {
    this.serverData = serverData;
    this.flashMessageService = flashMessageService;
  }

  addTodo(card: Card, description: string, callback: Function): void {
    const data = card.toPOJO();
    const todo = new Todo(description, 'active');

    data.todos = collection.addItem(data.todos, todo.toPOJO());

    this.serverData.put(this.dataUrl, card.id, data).subscribe(
      () => {
        card.setTodos(collection.addItem(card.todos, todo));

        if ('function' === typeof callback) {
          callback();
        }
      },
      err => this.flashMessageService.showMessage('error', `Cannot add todo. ${err}`)
    );
  }

  removeTodo(card: Card, todo: Todo, callback: Function): void {
    const data = card.toPOJO();

    data.todos = collection.removeItem(data.todos, todo.toPOJO());

    this.serverData.put(this.dataUrl, card.id, data).subscribe(
      () => {
        card.setTodos(collection.removeItem(card.todos, todo));

        if ('function' === typeof callback) {
          callback();
        }
      },
      err => this.flashMessageService.showMessage('error', `Cannot remove todo. ${err}`)
    );
  }

  editTodo(card: Card, todo: Todo, callback: Function): void {
    const data = card.toPOJO();

    data.todos = collection.updateItem(data.todos, todo.toPOJO());

    this.serverData.put(this.dataUrl, card.id, data).subscribe(
      () => {
        card.setTodos(collection.updateItem(card.todos, todo));

        if ('function' === typeof callback) {
          callback();
        }
      },
      err => this.flashMessageService.showMessage('error', `Cannot update todo. ${err}`)
    );
  }

  toggleTodo(card: Card, todo: Todo, callback: Function): void {
    todo.toggle();

    this.editTodo(card, todo, callback);
  }

  updateTodoDescription(
    card: Card,
    { todo, description } : { todo: Todo, description: string },
    callback: Function
  ): void {
    todo.setDescription(description);

    this.editTodo(card, todo, callback);
  }
}
