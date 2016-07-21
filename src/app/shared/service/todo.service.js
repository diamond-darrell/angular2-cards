import { Injectable } from '@angular/core';
import { Todo } from 'model/todo/todo.model';
import collection from 'utils/collection/collection.util';
import { ServerDataService } from 'service/server-data/server-data.service';
import { FlashMessageService } from 'service/flash-message.service';

@Injectable()
export class TodoService {
  dataUrl: string = 'cards';

  constructor(serverData: ServerDataService, flashMessageService: FlashMessageService) {
    this.serverData = serverData;
    this.flashMessageService = flashMessageService;
  }

  addTodo(card, description, callback) {
    const data = card.toPOJO();
    const todo = new Todo(description, 'active');

    data.todos = collection.addItem(data.todos, todo.toPOJO());

    this.serverData.put(this.dataUrl, card.id, data).subscribe(
      () => {
        card.setTodos(collection.addItem(card.todos, todo));
        callback();
      },
      err => this.flashMessageService.showMessage('error', `Cannot add todo. ${err}`)
    );
  }

  removeTodo(card, todo, callback) {
    const data = card.toPOJO();

    data.todos = collection.removeItem(data.todos, todo.toPOJO());

    this.serverData.put(this.dataUrl, card.id, data).subscribe(
      () => {
        card.setTodos(collection.removeItem(card.todos, todo));
        callback();
      },
      err => this.flashMessageService.showMessage('error', `Cannot remove todo. ${err}`)
    );
  }

  editTodo(card, todo, callback) {
    const data = card.toPOJO();

    data.todos = collection.updateItem(data.todos, todo.toPOJO());

    this.serverData.put(this.dataUrl, card.id, data).subscribe(
      () => {
        card.setTodos(collection.updateItem(card.todos, todo));
        callback();
      },
      err => this.flashMessageService.showMessage('error', `Cannot update todo. ${err}`)
    );
  }

  toggleTodo(card, todo, callback) {
    todo.toggle();

    this.editTodo(card, todo, callback);
  }

  updateTodoDescription(card, { todo, description }, callback) {
    todo.setDescription(description);

    this.editTodo(card, todo, callback);
  }
}
