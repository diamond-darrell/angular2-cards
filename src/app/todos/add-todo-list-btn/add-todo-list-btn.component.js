import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'add-todo-list-btn',
  styles: [`
    @media (min-width: 992px) {
      button {
        max-width: 110px;
        margin-top: 40px;
      }
    }
  `],
  template: `
  <button class="form-control btn-info"
    (click)="onAddTodoList.emit()">Add todo list</button>
  `
})
export class AddTodoListBtnComponent {
  @Output() onAddTodoList = new EventEmitter();
}