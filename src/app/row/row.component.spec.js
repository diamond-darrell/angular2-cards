import { RowComponent } from 'app/row/row.component';
import { CardService } from 'service/card/card.service';
import { ServerDataService } from 'service/server-data/server-data.service';
import { FlashMessageService } from 'service/flash-message/flash-message.service';

import { provide } from '@angular/core';

import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
  TestComponentBuilder,
} from '@angular/core/testing';

class CardServiceMock {
  addCard() { }
  removeCard() { }
  setCardTitle() { }
}
class ServerDataServiceMock { }
class FlashMessageServiceMock { }

describe('RowComponent test', () => {
  let tcb;
  let maxCardsCount;

  beforeEachProviders(() => [
    TestComponentBuilder,
    RowComponent,
    provide(CardService, { useClass: CardServiceMock }),
    provide(ServerDataService, { useClass: ServerDataServiceMock }),
    provide(FlashMessageService, { useClass: FlashMessageServiceMock }),
  ]);

  beforeEach(inject([TestComponentBuilder], _tcb => {
    tcb = _tcb;

    maxCardsCount = window.maxCardsCount;
    window.maxCardsCount = 3;
  }));

  afterEach(() => {
    window.maxCardsCount = maxCardsCount;
  });

  it('should has maxCards', (done) => {
    tcb.createAsync(RowComponent).then(fixture => {
      const component = fixture.componentInstance;

      expect(component.maxCards).toBeDefined();

      done();
    }).catch(e => done.fail(e));
  });

  it('should call cardService\'s functions', (done) => {
    tcb.createAsync(RowComponent).then(fixture => {
      const component = fixture.componentInstance;
      const { cardService } = component;

      spyOn(cardService, 'addCard');
      spyOn(cardService, 'removeCard');
      spyOn(cardService, 'setCardTitle');

      component.addCard();
      component.removeCard();
      component.setCardTitle();

      expect(cardService.addCard).toHaveBeenCalled();
      expect(cardService.removeCard).toHaveBeenCalled();
      expect(cardService.setCardTitle).toHaveBeenCalled();

      done();
    }).catch(e => done.fail(e));
  });

  it('should emit onUpdateRowTitle action', (done) => {
    tcb.createAsync(RowComponent).then(fixture => {
      const component = fixture.componentInstance;
      const test = {
        expectCall({ title }) {
          expect(title).toBe('Test');
        },
      };

      spyOn(test, 'expectCall');

      component.onUpdateRowTitle.subscribe(params => test.expectCall(params));

      component.setRowTitle('Test');

      expect(test.expectCall).toHaveBeenCalled();
      done();
    }).catch(e => done.fail(e));
  });
});
