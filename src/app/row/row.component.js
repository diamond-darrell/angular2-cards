import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TodoListComponent } from '../todo-list/todo-list.component';
import { AddCardBtnComponent } from '../add-card-btn/add-card-btn.component';
import { CardHeaderComponent } from '../card-header/card-header.component';
import { CardService } from '../shared/service/card.service';

@Component({
  selector: 'row-holder',
  providers: [CardService],
  directives: [
    TodoListComponent,
    AddCardBtnComponent,
    CardHeaderComponent
  ],
  template: require('./row.component.html'),
  styles: [`
    .panel-body {
      min-height: 165px;
    }
  `]
})
export class RowComponent {
  @Input() row = null;
  @Output() onRemoveRow = new EventEmitter();
  @Output() onUpdateRowTitle = new EventEmitter();

  static get parameters() { return [[CardService]]; }

  constructor(cardService) {
    this.cardService = cardService;
  }

  addCard() {
    this.cardService.addCard(this.row);
  }

  removeCard(card) {
    this.cardService.removeCard(this.row, card);
  }

  setCardTitle(params) {
    this.cardService.setCardTitle(this.row, params);
  }

  setRowTitle(title) {
    const { row } = this;
    this.onUpdateRowTitle.emit({row, title});
  }
}