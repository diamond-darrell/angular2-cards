import { Card } from './card.model';

export class Row {
  constructor(id, title = '', cards = []) {
    this.id = id;
    this.title = title;
    this.cards = cards;
  }

  addTodoList(card) {
    if (this.cards.length < 3) {
      this.cards = [
        ...this.cards,
        card
      ];
    }
  }

  updateTodoList(card, title) {
    const cardIndex = this.cards.indexOf(card);

    card.title = title;

    this.cards = [
      ...this.cards.slice(0, cardIndex),
      card,
      ...this.cards.slice(cardIndex + 1)
    ];
  }

  removeTodoList(card) {
    const cardIndex = this.cards.indexOf(card);

    this.cards = [
      ...this.cards.slice(0, cardIndex),
      ...this.cards.slice(cardIndex + 1)
    ];
  }
}