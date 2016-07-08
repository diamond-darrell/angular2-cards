import { Component, Input, Output, EventEmitter } from 'angular2/core';
import { TodoListComponent } from '../../todo/todo-list/todo-list.component';

@Component({
  selector: 'card-holder-item',
  directives: [TodoListComponent],
  template: require('./card-holder-item.component.html'),
  styles: [`.ligth { color: #fff; }`],
})
export class CardHolderItem {
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