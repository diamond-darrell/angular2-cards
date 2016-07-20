import collection from 'utils/collection.util';

export class Row {
  constructor(id, title = '', cards = []) {
    this.id = id;
    this.title = title;
    this.cards = cards;
  }

  setTitle(title) {
    this.title = title;
  }

  addCard(card) {
    // FIXME hardcode
    if (this.cards.length < 3) {
      this.cards = collection.addItem(this.cards, card);
    } else {
      throw Error('It allows only 3 card in a row.');
    }
  }

  updateCard(card, title) {
    card.setTitle(title);

    this.cards = collection.updateItem(this.cards, card);
  }

  removeCard(card) {
    this.cards = collection.removeItem(this.cards, card);
  }
}
