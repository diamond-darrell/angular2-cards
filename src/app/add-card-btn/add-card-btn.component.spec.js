import { AddCardBtnComponent } from 'app/add-card-btn';

import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
  TestComponentBuilder,
} from '@angular/core/testing';

describe('AddCardBtnComponent test', () => {
  let tcb;

  beforeEachProviders(() => [
    TestComponentBuilder,
    AddCardBtnComponent,
  ]);

  beforeEach(inject([TestComponentBuilder], _tcb => {
    tcb = _tcb;
  }));

  it('emit onAddRow event', (done) => {
    tcb.createAsync(AddCardBtnComponent).then(fixture => {
      const component = fixture.componentInstance;
      const element = fixture.nativeElement;
      const test = {
        expectCalled() { },
      };

      spyOn(test, 'expectCalled');
      component.onAddCard.subscribe(() => test.expectCalled());

      element.querySelector('.add-card').click();

      expect(test.expectCalled).toHaveBeenCalled();

      done();
    }).catch(e => done.fail(e));
  });
});
