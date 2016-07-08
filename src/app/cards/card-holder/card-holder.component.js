import { Component, Input, Output, EventEmitter } from 'angular2/core';
import { TodoListHolder } from '../../todos/todo-list-holder/todo-list-holder.component';

@Component({
  selector: 'card-holder',
  directives: [TodoListHolder],
  template: require('./card-holder.component.html')
})
export class CardHolderComponent {
  @Input() cardHolder = null;
  @Output() onRemoveCardHolder = new EventEmitter();

  //TODO take from cardHolder.cardsList
  cardsList = [
    { id: 1, title: 'Todos1' }
  ];

  removeCardItem(id) {
    //TODO implement removeCardItem
  }

  removeCardsHolder() {
    //TODO implement removeCardsHolder
  }
}