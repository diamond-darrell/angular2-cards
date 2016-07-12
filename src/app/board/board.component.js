import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { AddCardBtnComponent } from '../add-card-btn/add-card-btn.component';
import { BoardService } from '../shared/service/board.service';

@Component({
  selector: 'cards-board',
  providers: [BoardService],
  directives: [
    CardComponent,
    AddCardBtnComponent
  ],
  template: require('./board.component.html'),
  styles: [require('./board.component.css')],
})
export class BoardComponent {
  static get parameters() {
    return [[BoardService]]
  }

  constructor(boardService) {
    this.boardService = boardService;
  }

  ngOnInit() {
    this.boardService.getServerData();
  }

  addCard() {
    this.boardService.addCard();
  }

  removeCard(card) {
    this.boardService.removeCard(card);
  }

  updateCardTitle({card, title}) {
    this.boardService.updateCardTitle(card, title);
  }
}