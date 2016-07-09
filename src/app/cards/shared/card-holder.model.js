import { UUID } from 'angular2-uuid';
import { TodoList } from '../../todos/shared/todo-list.model';

export class CardHolder {
  constructor(title) {
    this.id = UUID.UUID();
    this.title = title;
    this.todoLists = [];
  }

  getTodoList(id) {
    return this.todoLists.find(todoList => todoList.id === id);
  }

  updateTodoList(oldTodoList, newTodoList) {
    const todoListIndex = this.todoLists.indexOf(oldTodoList);

    this.todoLists = [
      ...this.todoLists.slice(0, todoListIndex),
      newTodoList,
      ...this.todoLists.slice(todoListIndex + 1)
    ];
  }
}