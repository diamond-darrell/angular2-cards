import { TodoListComponent } from 'app/todo-list';

import { TodoService } from 'service/todo';
import { ServerDataService } from 'service/server-data';
import { FlashMessageService } from 'service/flash-message';

import { Card } from 'model/card';
import { Todo } from 'model/todo';

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

class TodoServiceMock {
  addTodo() { }
  removeTodo() { }
  toggleTodo() { }
  updateTodoDescription() { }
}
class ServerDataServiceMock { }
class FlashMessageServiceMock { }

describe('BoardComponent test', () => {
  let tcb;
  let testCard;

  beforeEachProviders(() => [
    TestComponentBuilder,
    TodoListComponent,
    provide(TodoService, { useClass: TodoServiceMock }),
    provide(ServerDataService, { useClass: ServerDataServiceMock }),
    provide(FlashMessageService, { useClass: FlashMessageServiceMock }),
  ]);

  beforeEach(inject([TestComponentBuilder], _tcb => {
    tcb = _tcb;
    testCard = new Card(1, 1, 'Card1', [new Todo('Todo1')]);
  }));

  it('should set filteredTodos on init', (done) => {
    tcb.createAsync(TodoListComponent).then(fixture => {
      const component = fixture.componentInstance;

      component.todoList = testCard;

      component.ngOnInit();

      expect(component.filteredTodos).toEqual(testCard.todos);

      done();
    }).catch(e => done.fail(e));
  });

  it('should emit onSetTodoListTitile event', (done) => {
    tcb.createAsync(TodoListComponent).then(fixture => {
      const component = fixture.componentInstance;
      const test = {
        expectCalled() { },
      };
      spyOn(test, 'expectCalled');

      component.todoList = testCard;
      component.onSetTodoListTitle.subscribe(param => test.expectCalled(param));

      component.setTodoListTitle('Test');

      expect(test.expectCalled).toHaveBeenCalled();

      done();
    }).catch(e => done.fail(e));
  });

  it('should call todoService\'s functions', (done) => {
    tcb.createAsync(TodoListComponent).then(fixture => {
      const component = fixture.componentInstance;
      const { todoService } = component;

      spyOn(todoService, 'addTodo');
      spyOn(todoService, 'removeTodo');
      spyOn(todoService, 'toggleTodo');
      spyOn(todoService, 'updateTodoDescription');

      component.addTodo();
      component.removeTodo();
      component.toggleTodo();
      component.updateTodo();

      expect(todoService.addTodo).toHaveBeenCalled();
      expect(todoService.removeTodo).toHaveBeenCalled();
      expect(todoService.toggleTodo).toHaveBeenCalled();
      expect(todoService.updateTodoDescription).toHaveBeenCalled();

      done();
    }).catch(e => done.fail(e));
  });

  it('should filter todos', (done) => {
    tcb.createAsync(TodoListComponent).then(fixture => {
      const component = fixture.componentInstance;
      const card = new Card(1, 1, 'Card1', [
        new Todo('Todo1'),
        new Todo('Todo2'),
        new Todo('Todo3'),
        new Todo('Todo4', 'completed'),
        new Todo('Todo5', 'completed'),
      ]);

      component.todoList = card;

      component.filterTodos('active');
      expect(component.currentFilter).toBe('active');
      expect(component.filteredTodos.length).toBe(3);

      component.filterTodos('completed');
      expect(component.currentFilter).toBe('completed');
      expect(component.filteredTodos.length).toBe(2);

      component.filterTodos('all');
      expect(component.currentFilter).toBe('all');
      expect(component.filteredTodos.length).toBe(card.todos.length);

      done();
    }).catch(e => done.fail(e));
  });
});
