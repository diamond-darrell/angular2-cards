import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-input',
  template: `
    <input
      #todo (keyup.enter)="addTodo(todo.value); todo.value=''"
      type="text"
      placeholder="What needs to be done?"
      class="form-control"/>
  `,
})
export class TodoInputComponent {
  @Output() onAddTodo: EventEmitter = new EventEmitter();

  addTodo(description: string): void {
    if (description) {
      this.onAddTodo.emit(description);
    }
  }
}
