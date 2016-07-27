import { AddRowBtnComponent } from 'app/add-row-btn';

import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
  TestComponentBuilder,
} from '@angular/core/testing';

describe('AddRowBtnComponent test', () => {
  let tcb;

  beforeEachProviders(() => [
    TestComponentBuilder,
    AddRowBtnComponent,
  ]);

  beforeEach(inject([TestComponentBuilder], _tcb => {
    tcb = _tcb;
  }));

  it('emit onAddRow event', (done) => {
    tcb.createAsync(AddRowBtnComponent).then(fixture => {
      const component = fixture.componentInstance;
      const element = fixture.nativeElement;
      const test = {
        expectCalled() { },
      };

      spyOn(test, 'expectCalled');
      component.onAddRow.subscribe(() => test.expectCalled());

      element.querySelector('.add-row').click();

      expect(test.expectCalled).toHaveBeenCalled();

      done();
    }).catch(e => done.fail(e));
  });
});
