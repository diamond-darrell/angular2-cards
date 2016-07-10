import { Component, Input, Output, EventEmitter } from 'angular2/core';
import { ToggleTodoBtnComponent } from '../toggle-todo-btn/toggle-todo-btn.component';

@Component({
  selector: 'todo-item',
  directives: [ToggleTodoBtnComponent],
  styles: [require('./todo-item.component.css')],
  template: `
  <li>
    <button class="close" (click)="onRemoveTodo.emit(todo)">&times;</button>
    <toggle-todo-btn
      [isCompleted]="todo.isCompleted()"
      (onToggle)="onToggleTodo.emit(todo)"></toggle-todo-btn>
    <span [ngClass]="todo.status">
      {{todo?.description}}
    </span>
  </li>
  `
})
export class TodoItemComponent {
  @Output() onToggleTodo = new EventEmitter();
  @Output() onRemoveTodo = new EventEmitter();
  @Input() todo = {};
}