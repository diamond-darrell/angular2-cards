import { Component, Input, Output, EventEmitter } from 'angular2/core';

@Component({
  selector: 'toggle-todo-btn',
  styles: [require('./toggle-todo-btn.component.css')],
  template: `
  <input type="checkbox" class="checkbox"
    [checked]="isCompleted"
    (click)="onToggle.emit()">
  `
})
export class ToggleTodoBtnComponent {
  @Input() isCompleted = false;
  @Output() onToggle = new EventEmitter();
}