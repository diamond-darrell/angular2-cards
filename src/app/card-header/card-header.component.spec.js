import { CardHeaderComponent } from 'app/card-header/card-header.component';

import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
  TestComponentBuilder,
} from '@angular/core/testing';


describe('Card-header component', () => {
  let tcb;

  beforeEachProviders(() => [
    TestComponentBuilder,
    CardHeaderComponent,
  ]);

  beforeEach(inject([TestComponentBuilder], _tcb => {
    tcb = _tcb;
  }));

  it('should render placeholder', (done) => {
    tcb.createAsync(CardHeaderComponent).then(fixture => {
      const component = fixture.componentInstance;
      const element = fixture.nativeElement;

      component.placeholder = 'Test placeholder';

      fixture.detectChanges();

      const $input = element.querySelector('.title-input');
      const $span = element.querySelector('.title-text');

      expect($span).toBeNull();
      expect($input.placeholder)
        .toBe('Test placeholder. Press Enter to save');

      done();
    }).catch(e => done.fail(e));
  });

  it('should render title', (done) => {
    tcb.createAsync(CardHeaderComponent).then(fixture => {
      const component = fixture.componentInstance;
      const element = fixture.nativeElement;

      component.title = 'Test title';

      fixture.detectChanges();

      const $input = element.querySelector('.title-input');
      const $span = element.querySelector('.title-text');

      expect($input).toBeNull();
      expect($span.innerHTML)
        .toBe('Test title');

      done();
    }).catch(e => done.fail(e));
  });

  it('setTitle should set title or emit event', done => {
    tcb.createAsync(CardHeaderComponent).then(fixture => {
      const component = fixture.componentInstance;
      const test = {
        expectCalled(title) {
          expect(title).toBe('Test');
        },
      };

      spyOn(test, 'expectCalled');

      component.tmpTitle = '';
      component.onSetTitle.subscribe(title => test.expectCalled(title));
      component.setTitle('Test');

      component.tmpTitle = 'Test1';
      component.setTitle('Test1', true);
      expect(component.title).toBe('Test1');

      expect(test.expectCalled).toHaveBeenCalled();

      done();
    }).catch(e => done.fail(e));
  });

  it('should emit onRemove event', (done) => {
    tcb.createAsync(CardHeaderComponent).then(fixture => {
      const component = fixture.componentInstance;
      const $closeBtn = fixture.nativeElement.querySelector('.close');
      const test = {
        expectCalled() { },
      };

      component.onRemove.subscribe(() => test.expectCalled());

      spyOn(test, 'expectCalled');

      $closeBtn.click();

      expect(test.expectCalled).toHaveBeenCalled();

      done();
    }).catch(e => done.fail(e));
  });
});
