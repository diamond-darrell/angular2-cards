import { Component, Input, Output, EventEmitter } from 'angular2/core';

@Component({
  selector: 'todo-item',
  styles: [`.completed { text-decoration: line-through; }`],
  template: `
  <li (click)="onToggleTodo.emit(todo)">
    <span [ngClass]="todo.status">{{todo?.description}}</span>
  </li>
  `
})
export class TodoItemComponent {
  @Output() onToggleTodo = new EventEmitter();
  @Input() todo = null;
}