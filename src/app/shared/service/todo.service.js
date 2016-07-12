import { Injectable } from '@angular/core';
import { Todo } from '../model/todo.model';
import { ServerDataService } from './server-data.service';

@Injectable()
export class TodoService {
  static get parameters() { return [[ServerDataService]]}

  constructor(serverData) {
    this.serverData = serverData;
  }

  _updateTodoList(todoList) {
    const data = {
      cardId: todoList.cardId,
      title: todoList.title,
      todos: todoList.todos.map(({id}) => id)
    };

    this.serverData.put('todo-lists', todoList.id, data).subscribe();
  }

  addTodo(todoList, description) {
    const data = {
      description,
      status: 'active',
      todoListId: todoList.id
    };

    this.serverData.post('todos', data)
      .subscribe(
        ({id, todoListId, description, status}) => {
          todoList.todos = [...todoList.todos, new Todo(id, todoListId, description, status)];

          this._updateTodoList(todoList);
        },
        err => { /* */ }
      );
  }

  removeTodo(todoList, todo) {
    this.serverData.delete('todos', todo.id)
      .subscribe(
        res => {
          const position = todoList.todos.indexOf(todo);

          todoList.todos = [
            ...todoList.todos.slice(0, position),
            ...todoList.todos.slice(position + 1)
          ];

          this._updateTodoList(todoList);
        },
        err => { /* */ }
      );
  }

  editTodo(todoList, todo, callback) {
    const data = todo.toJSON();

    this.serverData.put('todos', todo.id, data)
      .subscribe(
        res => {
          const position = todoList.todos.indexOf(todo);

          todoList.todos = [
            ...todoList.todos.slice(0, position),
            todo,
            ...todoList.todos.slice(position + 1)
          ];
        },
        err => { /* */ }
      )
  }

  toggleTodo(todoList, todo) {
    todo.toggle();

    this.editTodo(todoList, todo);
  }

  updateTodoDescription(todoList, {todo, description}) {
    todo.setDescription(description);

    this.editTodo(todoList, todo);
  }
}