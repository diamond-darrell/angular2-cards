import { BoardComponent } from 'app/board';
import { RowService } from 'service/row';
import { ServerDataService } from 'service/server-data';
import { FlashMessageService } from 'service/flash-message';

import { provide } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
  TestComponentBuilder,
} from '@angular/core/testing';

class RowServiceMock {
  getServerData() { }
  addRow() { }
  removeRow() { }
  updateRowTitle() { }
}
class ServerDataServiceMock {
  get() {
    return Observable.create(observer => observer.next());
  }
}
class FlashMessageServiceMock {
  showFleshMessage$ = Observable.create(observer => observer.next({}));
}

describe('BoardComponent test', () => {
  let tcb;

  beforeEachProviders(() => [
    TestComponentBuilder,
    BoardComponent,
    provide(RowService, { useClass: RowServiceMock }),
    provide(ServerDataService, { useClass: ServerDataServiceMock }),
    provide(FlashMessageService, { useClass: FlashMessageServiceMock }),
  ]);

  beforeEach(inject([TestComponentBuilder], _tcb => {
    tcb = _tcb;
  }));

  it('should has fmData', (done) => {
    tcb.createAsync(BoardComponent).then(fixture => {
      const component = fixture.componentInstance;

      fixture.detectChanges();

      expect(component.fmData).toBeDefined();

      done();
    }).catch(e => done.fail(e));
  });

  it('should call rowService\'s functions', (done) => {
    tcb.createAsync(BoardComponent).then(fixture => {
      const component = fixture.componentInstance;
      const { rowService } = component;

      spyOn(rowService, 'getServerData');
      spyOn(rowService, 'addRow');
      spyOn(rowService, 'removeRow');
      spyOn(rowService, 'updateRowTitle');
      spyOn(component.subscription, 'unsubscribe');

      component.ngOnInit();
      component.addRow();
      component.removeRow();
      component.updateRowTitle({});
      component.ngOnDestroy();

      expect(rowService.getServerData).toHaveBeenCalled();
      expect(rowService.addRow).toHaveBeenCalled();
      expect(rowService.removeRow).toHaveBeenCalled();
      expect(rowService.updateRowTitle).toHaveBeenCalled();
      expect(component.subscription.unsubscribe).toHaveBeenCalled();

      done();
    }).catch(e => done.fail(e));
  });
});
