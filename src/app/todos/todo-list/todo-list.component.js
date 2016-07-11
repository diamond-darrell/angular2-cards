import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TodoInputComponent } from '../todo-input/todo-input.component';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { TodoService } from '../shared/todo.service';

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
    this.todoService.addTodo(this.todoList, description);
  }

  removeTodo(todo) {
    this.todoService.removeTodo(this.todoList, todo);
  }

  toggleTodo(todo) {
    this.todoService.toggleTodo(this.todoList, todo);
  }

  updateTodo(params) {
    this.todoService.updateTodo(this.todoList, params);
  }
}