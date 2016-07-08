import { Injectable } from 'angular2/core';
import { TodoItem } from './todo-item/todo-item';

@Injectable()
export class TodoService {
  todos = [];

  addTodo(description) {
    this.todos = [...this.todos, new TodoItem(description)];
  }

  toggleTodo(todo) {
    const position = this.todos.indexOf(todo);

    todo.toggle();

    this.todos = [
      ...this.todos.slice(0, position),
      todo,
      ...this.todos.slice(position + 1)
    ];
  }
}