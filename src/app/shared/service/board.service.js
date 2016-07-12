import { Injectable } from '@angular/core';
import { Card } from '../model/card.model';
import { ServerDataService } from './server-data.service';

@Injectable()
export class BoardService {
  cards = [];

  static get parameters() { return [[ServerDataService]]; }
  constructor(serverData) {
    this.serverData = serverData;
  }

  getCards() {
    return this.serverData.get('cards')
      .subscribe(
        res => this.cards = this.normalizeCardsResponse(res),
        err => this.cars = [] // TODO implement error handling
      );
  }

  normalizeCardsResponse(cards = []) {
    return cards.map(({id, title, todoLists}) => new Card(id, title, todoLists));
  }

  addCard(title = '') {
    this.cards = [
      ...this.cards,
      new Card(title)
    ];
  }

  removeCard(card) {
    const cardIndex = this.cards.indexOf(card);

    this.cards = [
      ...this.cards.slice(0, cardIndex),
      ...this.cards.slice(cardIndex + 1)
    ];
  }

  updateCardTitle(card, title) {
    const cardIndex = this.cards.indexOf(card);

    if (card) {
      card.title = title;
      this.cards = [
        ...this.cards.slice(0, cardIndex),
        card,
        ...this.cards.slice(cardIndex + 1)
      ];
    }
  }
}