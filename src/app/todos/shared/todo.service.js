import { Injectable } from 'angular2/core';
import { Todo } from './todo.model';

@Injectable()
export class TodoService {
  todos = [];

  addTodo(description) {
    this.todos = [...this.todos, new Todo(description)];
  }

  removeTodo(todo) {
    const position = this.todos.indexOf(todo);

    this.todos = [
      ...this.todos.slice(0, position),
      ...this.todos.slice(position + 1)
    ];
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