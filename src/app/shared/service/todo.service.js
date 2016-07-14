import { Injectable } from '@angular/core';
import { Todo } from 'model/todo.model';
import collection from 'utils/collection.util';
import { ServerDataService } from 'service/server-data.service';

@Injectable()
export class TodoService {
  dataUrl = 'cards';

  static get parameters() { return [[ServerDataService]]}
  constructor(serverData) {
    this.serverData = serverData;
  }

  addTodo(card, description) {
    const data = card.toPOJO();
    const todo = new Todo(description, 'active');

    data.todos = collection.addItem(data.todos, todo.toPOJO());

    this.serverData.put(this.dataUrl, card.id, data).subscribe(
      () => {
        card.todos = collection.addItem(card.todos, todo);
      }
    );
  }

  removeTodo(card, todo) {
    const data = card.toPOJO();

    data.todos = collection.removeItem(data.todos, todo.toPOJO());

    this.serverData.put(this.dataUrl, card.id, data).subscribe(
      () => {
        card.todos = collection.removeItem(card.todos, todo);
      }
    );
  }

  editTodo(card, todo) {
    const data = card.toPOJO();

    data.todos = collection.updateItem(data.todos, todo.toPOJO());

    this.serverData.put(this.dataUrl, card.id, data).subscribe(
      () => {
        card.todos = collection.updateItem(card.todos, todo);
      }
    );
  }

  toggleTodo(card, todo) {
    todo.toggle();

    this.editTodo(card, todo);
  }

  updateTodoDescription(card, {todo, description}) {
    todo.setDescription(description);

    this.editTodo(card, todo);
  }
}