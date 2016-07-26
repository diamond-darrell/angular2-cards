import { FlashMessageComponent } from 'app/flash-message/flash-message.component';

import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
  TestComponentBuilder,
} from '@angular/core/testing';

describe('FlashMessageComponent test', () => {
  let tcb;

  beforeEachProviders(() => [
    TestComponentBuilder,
    FlashMessageComponent,
  ]);

  beforeEach(inject([TestComponentBuilder], _tcb => {
    tcb = _tcb;
  }));

  it('should has properties', (done) => {
    tcb.createAsync(FlashMessageComponent).then(fixture => {
      const component = fixture.componentInstance;

      expect(component.messages).toBeEmptyArray();
      expect(component.maxStackCount).toBe(5);

      done();
    }).catch(e => done.fail(e));
  });

  it('should add new message in stack', (done) => {
    tcb.createAsync(FlashMessageComponent).then(fixture => {
      const component = fixture.componentInstance;

      component.maxStackCount = 5;
      component.messages = [
        { type: 'info', message: 'test1' },
        { type: 'info', message: 'test2' },
        { type: 'info', message: 'test3' },
        { type: 'info', message: 'test4' },
      ];

      component.data = { type: 'info', message: 'test5' };
      component.ngOnChanges();

      expect(component.messages.length).toBe(5);

      component.data = { type: 'info', message: 'test6' };
      component.ngOnChanges();

      expect(component.messages.length).toBe(5);

      done();
    }).catch(e => done.fail(e));
  });
});
