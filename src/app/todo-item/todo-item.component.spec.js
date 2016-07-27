import { TodoItemComponent } from 'app/todo-item';
import { Todo } from 'model/todo';

import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
  TestComponentBuilder,
} from '@angular/core/testing';

describe('BoardComponent test', () => {
  let tcb;
  let testTodo;

  beforeEachProviders(() => [
    TestComponentBuilder,
    TodoItemComponent,
  ]);

  beforeEach(inject([TestComponentBuilder], _tcb => {
    tcb = _tcb;
    testTodo = new Todo('Test');
  }));

  it('should emit onOnRemoveTodo event', (done) => {
    tcb.createAsync(TodoItemComponent).then(fixture => {
      const component = fixture.componentInstance;
      const element = fixture.nativeElement;

      const test = {
        expectCalled(todo) {
          expect(todo).toEqual(testTodo);
        },
      };

      spyOn(test, 'expectCalled');
      component.onRemoveTodo.subscribe(todo => test.expectCalled(todo));

      component.todo = testTodo;

      fixture.detectChanges();

      element.querySelector('.close').click();

      expect(test.expectCalled).toHaveBeenCalled();

      done();
    }).catch(e => done.fail(e));
  });

  it('should render description', (done) => {
    tcb.createAsync(TodoItemComponent).then(fixture => {
      const component = fixture.componentInstance;
      const element = fixture.nativeElement;

      component.todo = testTodo;

      fixture.detectChanges();

      expect(element.querySelector('.active').innerHTML.trim())
        .toBe(testTodo.description);

      done();
    }).catch(e => done.fail(e));
  });

  it('should render edit-todo form', (done) => {
    tcb.createAsync(TodoItemComponent).then(fixture => {
      const component = fixture.componentInstance;
      const element = fixture.nativeElement;

      component.todo = testTodo;
      component.isEditing = true;

      fixture.detectChanges();

      expect(element.querySelector('.active')).toBeNull();
      expect(!!element.querySelector('.edit-todo')).toBeTrue();

      done();
    }).catch(e => done.fail(e));
  });

  it('should close edit-todo form', (done) => {
    tcb.createAsync(TodoItemComponent).then(fixture => {
      const component = fixture.componentInstance;

      component.todo = testTodo;
      component.isEditing = true;

      component.closeEditForm();

      expect(component.isEditing).toBeFalse();

      done();
    }).catch(e => done.fail(e));
  });

  it('should emit onUpdateTodo and call closeEditForm', (done) => {
    tcb.createAsync(TodoItemComponent).then(fixture => {
      const component = fixture.componentInstance;
      const test = {
        expectCalled({ todo, description }) {
          expect(todo).toEqual(testTodo);
          expect(description).toBe('Test1');
        },
      };

      spyOn(test, 'expectCalled');
      spyOn(component, 'closeEditForm');

      component.onUpdateTodo.subscribe(params => test.expectCalled(params));
      component.todo = testTodo;

      component.editTodo(component.todo, 'Test1');

      expect(test.expectCalled).toHaveBeenCalled();
      expect(component.closeEditForm).toHaveBeenCalled();

      done();
    }).catch(e => done.fail(e));
  });
});
