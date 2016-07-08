import { Component, Input, Output, EventEmitter } from 'angular2/core';

@Component({
  selector: 'todo-list',
  directives: [],
  template: require('./todo-list.component.html')

})
export class TodoListComponent {
  @Input() card = null;
  @Output() onRemoveCardHolder = new EventEmitter();

  todoLists = {
    id: 1,
    title: 'Todo1',
    todos: [1, 2]
  };

  removeTodoList(id) {
    //TODO implement removeTodoList
  }
}