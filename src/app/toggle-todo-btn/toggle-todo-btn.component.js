import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'toggle-todo-btn',
  styles: [require('./toggle-todo-btn.component.css')],
  template: `
  <input type="checkbox" class="checkbox"
    [disabled]="disabled"
    [checked]="isCompleted"
    (click)="onToggle.emit()">
  `,
})
export class ToggleTodoBtnComponent {
  @Input() isCompleted: boolean = false;
  @Input() disabled: boolean = false;
  @Output() onToggle: EventEmitter = new EventEmitter();
}
