/* eslint no-undef: "off" */
import collection from 'utils/collection/collection.util';
import { Card } from 'model/card/card.model';

export class Row {
  constructor(id: number, title: string = '', cards: Array<Card> = []): void {
    this.id = id;
    this.title = title;
    this.cards = cards;
  }

  setTitle(title: string): void {
    this.title = title;
  }

  addCard(card: Card): void {
    // maxCardsCount defined in webpack.common config
    if (this.cards.length < maxCardsCount) {
      this.cards = collection.addItem(this.cards, card);
    } else {
      throw Error('It allows only 3 card in a row.');
    }
  }

  updateCard(card: Card, title: string): void {
    card.setTitle(title);

    this.cards = collection.updateItem(this.cards, card);
  }

  removeCard(card: Card): void {
    this.cards = collection.removeItem(this.cards, card);
  }
}
