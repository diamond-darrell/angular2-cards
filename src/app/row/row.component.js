/* eslint no-undef: "off" */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TodoListComponent } from 'app/todo-list/todo-list.component';
import { AddCardBtnComponent } from 'app/add-card-btn/add-card-btn.component';
import { CardHeaderComponent } from 'app/card-header/card-header.component';
import { CardService } from 'service/card/card.service';
import { Row } from 'model/row/row.model';
import { Card } from 'model/card/card.model';

@Component({
  selector: 'row-holder',
  providers: [CardService],
  directives: [
    TodoListComponent,
    AddCardBtnComponent,
    CardHeaderComponent,
  ],
  template: require('./row.component.html'),
  styles: [`
    .panel-body {
      min-height: 165px;
    }
  `],
})
export class RowComponent {
  @Input() row: Row = null;
  @Output() onRemoveRow: EventEmitter = new EventEmitter();
  @Output() onUpdateRowTitle: EventEmitter = new EventEmitter();

  // defined in webpack.common config
  maxCards: number = maxCardsCount;

  constructor(cardService: CardService): void {
    this.cardService = cardService;
  }

  addCard(): void {
    this.cardService.addCard(this.row);
  }

  removeCard(card: Card): void {
    this.cardService.removeCard(this.row, card);
  }

  setCardTitle(params: { card: Card, title: string }): void {
    this.cardService.setCardTitle(this.row, params);
  }

  setRowTitle(title: string) {
    const { row } = this;
    this.onUpdateRowTitle.emit({ row, title });
  }
}
