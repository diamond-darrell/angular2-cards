import { Card } from 'model/card.model';
import collection from 'utils/collection.util'

export class Row {
  constructor(id, title = '', cards = []) {
    this.id = id;
    this.title = title;
    this.cards = cards;
  }

  addCard(card) {
    // FIXME hardcode
    if (this.cards.length < 3) {
      this.cards = collection.addItem(this.cards, card);
    }
  }

  updateCard(card, title) {
    card.title = title;

    this.cards = collection.updateItem(this.cards, card);
  }

  removeCard(card) {
    this.cards = collection.removeItem(this.cards, card);
  }
}