import { Row } from 'model/row/row.model';
import { Card } from 'model/card/card.model';

describe('Row model test', () => {
  const card = new Card(1, 1, 'Card1');
  const row = new Row(1, 'Row1', [card]);

  it('Should has properties', () => {
    expect(typeof(row.id)).not.toBe(undefined);
    expect(typeof(row.title)).not.toBe(undefined);
    expect(typeof(card.cards)).not.toBe(undefined);
  });

  it('Should has functions', () => {
    expect(typeof(row.setTitle)).toBe('function');
    expect(typeof(row.addCard)).toBe('function');
    expect(typeof(row.updateCard)).toBe('function');
    expect(typeof(row.removeCard)).toBe('function');
  });

  it('cards should be array of Card instances', () => {
    const [cardInstance] = row.cards;

    expect(row.cards).toEqual(jasmine.arrayContaining([card]));
    expect(cardInstance instanceof Card).toBe(true);
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
    expect(row.cards).toEqual(jasmine.arrayContaining([localCard]));
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
