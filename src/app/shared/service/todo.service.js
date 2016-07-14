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
    card.todos = collection.addItem(card.todos, new Todo(description, 'active'));
    const data = card.toPOJO();

    this.serverData.put(this.dataUrl, card.id, data).subscribe();
  }

  removeTodo(card, todo) {
    card.todos = collection.removeItem(card.todos, todo);
    const data = card.toPOJO();

    this.serverData.put(this.dataUrl, card.id, data).subscribe();
  }

  editTodo(card, todo) {
    card.todos = collection.updateItem(card.todos, todo);
    const data = card.toPOJO();

    this.serverData.put(this.dataUrl, card.id, data).subscribe();
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