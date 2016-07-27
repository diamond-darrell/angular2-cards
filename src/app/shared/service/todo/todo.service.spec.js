import { provide } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { TodoService } from 'service/todo/todo.service';
import { ServerDataService } from 'service/server-data/server-data.service';
import { FlashMessageService } from 'service/flash-message/flash-message.service';

import { Todo } from 'model/todo/todo.model';
import { Card } from 'model/card/card.model';

import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';

class MockServerDataService {
  put() {
    return Observable.create(observer => observer.next());
  }
}

describe('Row service test', () => {
  let service: TodoService;

  beforeEachProviders(() => [
    TodoService,
    FlashMessageService,
    provide(ServerDataService, { useClass: MockServerDataService }),
  ]);

  beforeEach(inject([TodoService], (todoService: TodoService) => {
    service = todoService;
  }));

  it('should has properties', () => {
    expect(service.dataUrl).toBeDefined();
    expect(service.dataUrl).toBeString();
  });

  it('addTodo should add new todo in card.todos collection', () => {
    const card = new Card(1, 1, 'Card1');
    const todo = new Todo('Todo1');

    service.addTodo(card, 'Todo1');

    expect(card.todos).toContain(todo);
  });

  it('removeTodo should remove todo from card.todos collection', () => {
    const todo = new Todo('Todo1');
    const card = new Card(1, 1, 'Card1', [todo]);

    service.removeTodo(card, todo);

    expect(card.todos).not.toContain(todo);
  });

  it('editTodo should update card.todos collection with received todo', () => {
    const todo = new Todo('Todo1');
    const card = new Card(1, 1, 'Card1', [todo]);

    todo.id = 0;
    service.editTodo(card, todo);

    expect(card.todos[0].id).toBe(0);
  });

  it('toggleTodo should toggle received todo\'s status and update card.todos collection', () => {
    const todo = new Todo('Todo1');
    const card = new Card(1, 1, 'Card1', [todo]);

    service.toggleTodo(card, todo);

    expect(card.todos[0].status).toBe('completed');
  });

  it('updateTodoDescription should update todo\'s description and card.todos collection', () => {
    const todo = new Todo('Todo1');
    const card = new Card(1, 1, 'Card1', [todo]);

    service.updateTodoDescription(card, { todo, description: 'Test' });

    expect(card.todos[0].description).toBe('Test');
  });
});
