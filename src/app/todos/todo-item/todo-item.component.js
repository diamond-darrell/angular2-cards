import { Component, Input, Output, EventEmitter } from 'angular2/core';

@Component({
  selector: 'todo-item',
  styles: [require('./todo-item.component.css')],
  template: `
  <li class="list-group-item" [ngClass]="todo.status">
    <button class="close" (click)="onRemoveTodo.emit(todo)">&times;</button>
    <span class="checkbox" (click)="onToggleTodo.emit(todo)">
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
  @Output() onRemoveTodo = new EventEmitter();
  @Input() todo = {};
}