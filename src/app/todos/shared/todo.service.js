import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable()
export class TodoService {
  addTodo(todoList, description) {
    todoList.todos = [...todoList.todos, new Todo(description)];
  }

  removeTodo(todoList, todo) {
    const position = todoList.todos.indexOf(todo);

    todoList.todos = [
      ...todoList.todos.slice(0, position),
      ...todoList.todos.slice(position + 1)
    ];
  }

  toggleTodo(todoList, todo) {
    const position = todoList.todos.indexOf(todo);

    todo.toggle();

    todoList.todos = [
      ...todoList.todos.slice(0, position),
      todo,
      ...todoList.todos.slice(position + 1)
    ];
  }

  updateTodo(todoList, {todo, description}) {
    const position = todoList.todos.indexOf(todo);

    todo.setDescription(description);

    todoList.todos = [
      ...todoList.todos.slice(0, position),
      todo,
      ...todoList.todos.slice(position + 1)
    ];
  }
}