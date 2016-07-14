import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TodoInputComponent } from '../todo-input/todo-input.component';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { CardHeaderComponent } from '../card-header/card-header.component';
import { TodoService } from '../shared/service/todo.service';

@Component({
  selector: 'todo-list',
  directives: [
    TodoInputComponent,
    TodoItemComponent,
    CardHeaderComponent
  ],
  template: require('./todo-list.component.html'),
  styles: [

  ],
  providers: [TodoService]
})
export class TodoListComponent {
  @Input() todoList = null;
  @Input() card = null;
  @Output() onRemoveTodoList = new EventEmitter();
  @Output() onSetTodoListTitle = new EventEmitter();

  setTodoListTitle(title) {
    const { todoList } = this;
    this.onSetTodoListTitle.emit({title, card: todoList});
  }

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
    this.todoService.updateTodoDescription(this.todoList, params);
  }
}