import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { AddCardBtnComponent } from '../add-card-btn/add-card-btn.component';
import { CardsService } from '../shared/service/cards.service';

@Component({
  selector: 'cards-board',
  providers: [CardsService],
  directives: [
    CardComponent,
    AddCardBtnComponent
  ],
  template: require('./board.component.html'),
  styles: [require('./board.component.css')],
})
export class BoardComponent {
  static get parameters() {
    return [[CardsService]]
  }

  constructor(cardsService) {
    this.cardsService = cardsService;
  }

  ngOnInit() {
    this.cardsService.getCards();
  }

  addCard() {
    this.cardsService.addCard();
  }

  removeCard(card) {
    this.cardsService.removeCard(card);
  }
}