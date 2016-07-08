import { Component, Input, Output, EventEmitter } from 'angular2/core';

@Component({
  selector: 'todo-item',
  styles: [`.completed { text-decoration: line-through; }`],
  template: `
  <li (click)="onToggleTodo.emit(todo)"
    [ngClass]="{'alert-success': todo.isCompleted()}">
    <span class="checkbox">
      <input type="checkbox" [checked]="todo.isCompleted()"/>
      <label [ngClass]="todo.status">
        {{todo?.description}}
      </label>
      </span>
  </li>
  `
})
export class TodoItemComponent {
  @Output() onToggleTodo = new EventEmitter();
  @Input() todo = {};
}