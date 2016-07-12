import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TodoListComponent } from '../todo-list/todo-list.component';
import { AddTodoListBtnComponent } from '../add-todo-list-btn/add-todo-list-btn.component';
import { CardHeaderComponent } from '../card-header/card-header.component';
import { CardsService } from '../shared/service/cards.service';

@Component({
  selector: 'card-holder',
  providers: [CardsService],
  directives: [
    TodoListComponent,
    AddTodoListBtnComponent,
    CardHeaderComponent
  ],
  template: require('./card.component.html'),
  styles: [`
    .panel-body {
      min-height: 165px;
    }
  `]
})
export class CardComponent {
  @Input() cardId = null;
  @Output() onRemoveCard = new EventEmitter();

  static get parameters() {
    return [[CardsService]];
  }

  constructor(cardsService) {
    this.cardsService = cardsService;
  }

  ngOnInit() {

  }

  removeTodoList(todoList) {
    this.cardsService.removeTodoList(this.card, todoList);
  }

  addTodoList() {
    this.cardsService.addTodoList(this.card, '');
  }

  setTodoListTitle(params) {
    this.cardsService.updateTodoListTitle(this.card, params);
  }

  setCardTitle(title) {
    this.cardsService.updateCardTitle(this.card, title);
  }
}