import { Component, Input, Output, EventEmitter } from 'angular2/core';
import { TodoListHolderComponent } from '../../todos/todo-list-holder/todo-list-holder.component';
import { AddTodoListBtnComponent } from '../../todos/add-todo-list-btn/add-todo-list-btn.component';
import { CardsService } from '../shared/cards.service';

@Component({
  selector: 'card-holder',
  providers: [CardsService],
  directives: [
    TodoListHolderComponent,
    AddTodoListBtnComponent
  ],
  template: require('./card-holder.component.html')
})
export class CardHolderComponent {
  @Input() cardHolder = null;
  @Output() onRemoveCardHolder = new EventEmitter();
  @Output() onRemoveCardHolder = new EventEmitter();

  static get parameters() {
    return [[CardsService]];
  }

  constructor(cardsService) {
    this.cardsService = cardsService;
  }

  removeTodoList() {
    //TODO implement removeCardItem
  }

  addTodoList() {
    this.cardsService.addTodoList(this.cardHolder, '');
  }

  setTodoListTitle(params) {
    this.cardsService.updateTodoListTitle(this.cardHolder, params);
  }
}