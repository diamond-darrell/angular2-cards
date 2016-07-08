import { Component, Input, Output, EventEmitter } from 'angular2/core';
import { TodoInputComponent } from '../todo-input/todo-input.component';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { TodoService } from '../todo.service';

@Component({
  selector: 'todo-list',
  directives: [TodoInputComponent, TodoItemComponent],
  template: require('./todo-list.component.html'),
  styles: [`ul { list-style: none; padding: 0; }`],
  providers: [TodoService]
})
export class TodoListComponent {
  @Input() todoList = null;

  static get parameters() {
    return [[TodoService]];
  }

  constructor(todoService) {
    this.todoService = todoService;
  }

  addTodo(description) {
    this.todoService.addTodo(description);
  }

  removeTodo(todo) {
    this.todoService.removeTodo(todo);
  }

  toggleTodo(todo) {
    this.todoService.toggleTodo(todo);
  }
}