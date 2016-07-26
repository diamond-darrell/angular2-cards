import { TodoInputComponent } from 'app/todo-input/todo-input.component';

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
    TodoInputComponent,
  ]);

  beforeEach(inject([TestComponentBuilder], _tcb => {
    tcb = _tcb;
  }));

  it('should emit onToggle event', (done) => {
    tcb.createAsync(TodoInputComponent).then(fixture => {
      const component = fixture.componentInstance;
      const test = { expectCalled() { } };
      const spy = spyOn(test, 'expectCalled');

      component.onAddTodo.subscribe(() => test.expectCalled());

      component.addTodo('Test');
      expect(test.expectCalled).toHaveBeenCalled();

      spy.calls.reset();

      component.addTodo('');
      expect(test.expectCalled).not.toHaveBeenCalled();

      done();
    }).catch(e => done.fail(e));
  });
});
