import { Component, Input, Output, EventEmitter } from 'angular2/core';
import { TodoListHolderComponent } from '../../todos/todo-list-holder/todo-list-holder.component';
import { AddTodoListBtnComponent } from '../../todos/add-todo-list-btn/add-todo-list-btn.component';
import { CardHeaderComponent } from '../../shared/card-header/card-header.component';
import { CardsService } from '../shared/cards.service';

@Component({
  selector: 'card-holder',
  providers: [CardsService],
  directives: [
    TodoListHolderComponent,
    AddTodoListBtnComponent,
    CardHeaderComponent
  ],
  template: require('./card-holder.component.html'),

})
export class CardHolderComponent {
  @Input() cardHolder = null;
  @Output() onRemoveCardHolder = new EventEmitter();

  static get parameters() {
    return [[CardsService]];
  }

  constructor(cardsService) {
    this.cardsService = cardsService;
  }

  removeTodoList(todoList) {
    this.cardsService.removeTodoList(this.cardHolder, todoList);
  }

  addTodoList() {
    this.cardsService.addTodoList(this.cardHolder, '');
  }

  setTodoListTitle(params) {
    this.cardsService.updateTodoListTitle(this.cardHolder, params);
  }

  setCardHolderTitle(title) {
    this.cardsService.updateCardHolderTitle(this.cardHolder, title);
  }
}