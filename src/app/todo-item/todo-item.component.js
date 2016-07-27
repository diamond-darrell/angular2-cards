import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ToggleTodoBtnComponent } from 'app/toggle-todo-btn';
import { FocusDirective } from 'directive/element-focus';
import { Todo } from 'model/todo';

@Component({
  selector: 'todo-item',
  directives: [
    ToggleTodoBtnComponent,
    FocusDirective,
  ],
  styles: [require('./todo-item.component.css')],
  template: require('./todo-item.component.html'),
})
export class TodoItemComponent {
  @Output() onToggleTodo: EventEmitter = new EventEmitter();
  @Output() onRemoveTodo: EventEmitter = new EventEmitter();
  @Output() onUpdateTodo: EventEmitter = new EventEmitter();

  @Input() todo: Todo = {};

  isEditing: boolean = false;

  editTodo(description: string): void {
    const { todo } = this;

    this.onUpdateTodo.emit({ todo, description });
    this.closeEditForm();
  }

  closeEditForm(): void {
    this.isEditing = false;
  }
}
