import { Component, Input, Output, EventEmitter } from 'angular2/core';

@Component({
  selector: 'todo-input',
  template: `
  <input
    #todo (keyup.enter)="addTodo(todo.value); todo.value=''"
    type="text"
    placeholder="What needs to be done?"
    class="form-control"/>
  `
})
export class TodoInputComponent {
  @Output() onAddTodo = new EventEmitter();

  addTodo(description) {
    if (description) {
      this.onAddTodo.emit(description);
    }
  }
}