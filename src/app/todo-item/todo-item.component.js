import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ToggleTodoBtnComponent } from 'app/toggle-todo-btn/toggle-todo-btn.component';
import { FocusDirective } from 'directive/element-focus.directive';

@Component({
  selector: 'todo-item',
  directives: [
    ToggleTodoBtnComponent,
    FocusDirective
  ],
  styles: [require('./todo-item.component.css')],
  template: require('./todo-item.component.html')
})
export class TodoItemComponent {
  @Output() onToggleTodo = new EventEmitter();
  @Output() onRemoveTodo = new EventEmitter();
  @Output() onUpdateTodo = new EventEmitter();

  @Input() todo = {};

  isEditing = false;

  editTodo(description) {
    const { todo } = this;

    this.onUpdateTodo.emit({ todo, description });
    this.closeEditForm();
  }

  closeEditForm() {
    this.isEditing = false;
  }
}