import { Component, Input, Output, EventEmitter } from 'angular2/core';
import { TodoListComponent } from '../todo-list/todo-list.component';

@Component({
  selector: 'todo-list-holder',
  directives: [TodoListComponent],
  template: require('./todo-list-holder.component.html'),
  styles: [`.ligth { color: #fff; }`],
})
export class TodoListHolder {
  @Input() todoList = null;
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