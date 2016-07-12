import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TodoListComponent } from '../todo-list/todo-list.component';
import { AddTodoListBtnComponent } from '../add-todo-list-btn/add-todo-list-btn.component';
import { CardHeaderComponent } from '../card-header/card-header.component';
import { CardService } from '../shared/service/card.service';

@Component({
  selector: 'card-holder',
  providers: [CardService],
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

  static get parameters() { return [[CardService]]; }
  constructor(cardService) { this.cardService = cardService; }

  ngOnInit() {

  }

  addTodoList() {
    this.cardService.addTodoList(this.card);
  }

  removeTodoList(todoList) {
    this.cardService.removeTodoList(this.card, todoList);
  }

  setTodoListTitle(params) {
    this.cardService.updateTodoListTitle(this.card, params);
  }
}