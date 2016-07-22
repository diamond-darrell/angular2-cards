import { provide } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { RowService } from 'service/row/row.service';
import { ServerDataService } from 'service/server-data/server-data.service';
import { FlashMessageService } from 'service/flash-message/flash-message.service';

import { Row } from 'model/row/row.model';
import { Card } from 'model/card/card.model';
import { Todo } from 'model/todo/todo.model';

import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';

class MockServerDataService {
  get() {
    return Observable.create(observer => {
      observer.next([
        {
          title: 'Row1',
          id: 1,
          cards: [
            {
              rowId: 1,
              title: 'Card1',
              todos: [
                {
                  description: 'Todo1',
                  status: 'active',
                },
              ],
              id: 1,
            },
          ],
        },
      ]);
    });
  }

  post(dataUrl, { title }) {
    return Observable.create(observer => {
      observer.next({
        id: 1,
        title,
      });
    });
  }

  delete() {
    return Observable.create(observer => observer.next());
  }

  put(dataUrl, id, { title }) {
    return Observable.create(observer => {
      observer.next({ title });
    });
  }
}

describe('Row service test', () => {
  let service: RowService;

  beforeEachProviders(() => [
    RowService,
    FlashMessageService,
    provide(ServerDataService, { useClass: MockServerDataService }),
  ]);

  beforeEach(inject([RowService], (rowService: RowService) => {
    service = rowService;
  }));

  it('should has properties', () => {
    expect(service.rows).toBeDefined();
    expect(service.dataUrl).toBeDefined();

    expect(service.rows).toBeEmptyArray();
    expect(service.dataUrl).toBeString();
  });

  it('getServerData should set request result to rows property', () => {
    const expected = [
      new Row(1, 'Row1', [
        new Card(1, 1, 'Card1', [
          new Todo('Todo1', 'active'),
        ]),
      ]),
    ];

    service.getServerData();

    expect(service.rows).toEqual(expected);
  });

  it('addRow should add new row in rows collection', () => {
    const expected = new Row(1, 'Test');
    service.rows = [];
    service.addRow('Test');

    expect(service.rows).toContain(expected);
  });

  it('removeRow should remove row from rows collection', () => {
    const expected = new Row(1, 'Test');

    service.rows = [expected];

    service.removeRow(expected);

    expect(service.rows).not.toContain(expected);
  });

  it('updateRowTitle should update of received row in collection', () => {
    const expected = new Row(1, 'Test');

    service.rows = [expected];

    service.updateRowTitle(expected, 'Test1');

    expect(service.rows[0].title).toBe('Test1');
  });
});
