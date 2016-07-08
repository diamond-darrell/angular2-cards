import { Component, Input, Output, EventEmitter } from 'angular2/core';

@Component({
  selector: 'card-item',
  directives: [],
  template: require('./card-holder-item.component.html'),
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