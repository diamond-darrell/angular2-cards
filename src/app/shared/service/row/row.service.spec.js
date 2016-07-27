import { provide } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { CardService } from 'service/card';
import { ServerDataService } from 'service/server-data';
import { FlashMessageService } from 'service/flash-message';

import { Row } from 'model/row';
import { Card } from 'model/card';

import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';

class MockServerDataService {
  post(dataUrl, { title }) {
    return Observable.create(observer => {
      observer.next({
        id: 1,
        title,
        todos: [],
      });
    });
  }

  delete() {
    return Observable.create(observer => observer.next());
  }

  put() {
    return Observable.create(observer => observer.next());
  }
}

describe('Row service test', () => {
  let service: CardService;
  let maxCardsCount: number;

  beforeEachProviders(() => [
    CardService,
    FlashMessageService,
    provide(ServerDataService, { useClass: MockServerDataService }),
  ]);

  beforeEach(inject([CardService], (cardService: CardService) => {
    service = cardService;

    maxCardsCount = window.maxCardsCount;
    window.maxCardsCount = 3;
  }));

  afterEach(() => {
    window.maxCardsCount = maxCardsCount;
  });

  it('should has properties', () => {
    expect(service.dataUrl).toBeDefined();
    expect(service.dataUrl).toBeString();
  });

  it('addCard should add new card in row.cards collection', () => {
    const row = new Row(1, 'Row1', []);
    const card = new Card(1, 1, 'Card1');

    service.addCard(row, 'Card1');

    expect(row.cards).toContain(card);
  });

  it('addCard should throw an error if there are pushing more cards than specified', () => {
    const row = new Row(1, 'Row1', []);

    service.addCard(row, 'Card1');
    service.addCard(row, 'Card2');
    service.addCard(row, 'Card3');

    expect(() => service.addCard(row, 'Card4')).toThrow();
  });

  it('removeCard should remove card from row.cards collection', () => {
    const card = new Card(1, 1, 'Card1');
    const row = new Row(1, 'Row1', [card]);

    service.removeCard(row, card);

    expect(row.cards).not.toContain(card);
  });

  it('updateRowTitle should update of received row in collection', () => {
    const card = new Card(1, 1, 'Card1');
    const row = new Row(1, 'Row1', [card]);

    service.setCardTitle(row, { card, title: 'Test' });

    expect(row.cards[0].title).toBe('Test');
  });
});
