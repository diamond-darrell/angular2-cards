import { ToggleTodoBtnComponent } from 'app/toggle-todo-btn';

import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
  TestComponentBuilder,
} from '@angular/core/testing';

describe('ToggleTodoBtnComponent test', () => {
  let tcb;

  beforeEachProviders(() => [
    TestComponentBuilder,
    ToggleTodoBtnComponent,
  ]);

  beforeEach(inject([TestComponentBuilder], _tcb => {
    tcb = _tcb;
  }));

  it('should emit onToggle event', (done) => {
    tcb.createAsync(ToggleTodoBtnComponent).then(fixture => {
      const component = fixture.componentInstance;
      const element = fixture.nativeElement;
      const $checkbox = element.querySelector('.checkbox');
      const test = { expectCalled() { } };

      spyOn(test, 'expectCalled');

      component.onToggle.subscribe(() => test.expectCalled());
      $checkbox.click();

      expect(test.expectCalled).toHaveBeenCalled();
      expect($checkbox.checked).toBeTrue();

      done();
    }).catch(e => done.fail(e));
  });
});
