import { Component, Output, EventEmitter } from 'angular2/core';

@Component({
  selector: 'add-todo-list-btn',
  template: `
  <button class="form-control btn-info"
    (click)="onAddTodoList.emit()">Add todo list</button>
  `
})
export class AddTodoListBtnComponent {
  @Output() onAddTodoList = new EventEmitter();
}