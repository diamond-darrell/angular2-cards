import { Injectable } from '@angular/core';
import { Todo } from '../model/todo.model';
import { Card } from '../model/card.model';
import { ServerDataService } from './server-data.service';

@Injectable()
export class CardService {
  static get parameters() { return [[ServerDataService]]}

  constructor(serverData) {
    this.serverData = serverData;
  }

  addTodoList(card, title = '') {
    const data = {
      title,
      cardId: card.id,
      todos: []
    };

    this.serverData.post('todo-lists', data)
      .subscribe(
        ({ id, title, todos }) => {
          card.addTodoList(new TodoList(id, card.id, title, todos));
          this._updateCardsTodoLists(card);
        },
        err => {}
      );
  }

  removeTodoList(card, todoList) {
    this.serverData.delete('todo-lists', todoList.id)
      .subscribe(
        res => {
          card.removeTodoList(todoList);
          this._updateCardsTodoLists(card);
        },
        err => {}
      );
  }

  _updateCardsTodoLists(card) {
    const data = {
      title: card.title,
      todoLists: card.todoLists.map(({id}) => id)
    };

    this.serverData.put('cards', card.id, data).subscribe();
  }

  updateTodoListTitle(card, {todoList, title = ''}) {
    const data = {
      title,
      cardId: todoList.cardId,
      todos: todoList.todos.map(({id}) => id)
    };

    this.serverData.put('todo-lists', todoList.id, data)
      .subscribe(
        res => card.updateTodoList(todoList, title),
        err => {}
      );
  }
}