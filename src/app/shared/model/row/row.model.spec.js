import { Row } from 'model/row/row.model';
import { Card } from 'model/card/card.model';

describe('Row model test', () => {
  const card = new Card(1, 1, 'Card1');
  const row = new Row(1, 'Row1', [card]);
  let maxCardsCount;

  beforeEach(() => {
    maxCardsCount = window.maxCardsCount;
    window.maxCardsCount = 3;
  });

  afterEach(() => {
    window.maxCardsCount = maxCardsCount;
  });

  it('Should has properties', () => {
    expect(row.id).toBeDefined();
    expect(row.title).toBeDefined();
    expect(row.cards).toBeDefined();
  });

  it('Should has functions', () => {
    expect(row.setTitle).toBeFunction();
    expect(row.addCard).toBeFunction();
    expect(row.updateCard).toBeFunction();
    expect(row.removeCard).toBeFunction();
  });

  it('cards should be array of Card instances', () => {
    const [cardInstance] = row.cards;

    expect(row.cards).toBeArray();
    expect(row.cards).toContain(card);
    expect(cardInstance instanceof Card).toBeTrue();
  });

  it('Function setTitle should set title', () => {
    row.setTitle('test1');

    expect(row.title).toBe('test1');
  });

  it('Function addCard should push card into cards array', () => {
    const localRow = new Row(1, 'Row1');
    const localCard = new Card(1, 1, 'Card1');

    localRow.addCard(localCard);

    expect(localRow.cards.length).toBe(1);
    expect(row.cards).toContain(localCard);
  });

  it('Function addCard can throw error when push more than limit cards', () => {
    expect(row.addCard).toThrowError();
  });

  it('Function updateCard should update title of received card', () => {
    row.updateCard(card, 'Test');

    const [updatedCard] = row.cards;

    expect(updatedCard.title).toBe('Test');
  });

  it('Function removeCard should remove received card from cards array', () => {
    row.removeCard(card);

    expect(row.cards.length).toBe(0);
  });
});
