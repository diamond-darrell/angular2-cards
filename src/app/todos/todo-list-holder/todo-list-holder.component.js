import { Component, Input, Output, EventEmitter } from 'angular2/core';
import { TodoListComponent } from '../todo-list/todo-list.component';
import { CardHeaderComponent } from '../../shared/card-header/card-header.component';

@Component({
  selector: 'todo-list-holder',
  directives: [
    TodoListComponent,
    CardHeaderComponent
  ],
  template: require('./todo-list-holder.component.html'),
  styles: [
    `.ligth { color: #fff; }`,
    `.title-input { max-width: 95%;  display: inline-block; }`,
    `.panel-body { background-color: #bdc3c7; }`
  ],
})
export class TodoListHolderComponent {
  @Input() todoList = null;
  @Output() onRemoveTodoList = new EventEmitter();
  @Output() onSetTodoListTitle = new EventEmitter();

  todoLists = {
    id: 1,
    title: 'Todo1',
    todos: [1, 2]
  };

  setTodoListTitle(title) {
    const todoList = this.todoList;
    this.onSetTodoListTitle.emit({todoList, title});
  }
}