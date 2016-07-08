import { UUID } from 'angular2-uuid';
import { TodoList } from '../../todos/shared/todo-list.model';

export class CardHolder {
  constructor(title) {
    this.id = UUID.UUID();
    this.title = title;
    this.todoLists = [new TodoList('Test list')];
  }

  getTodoList(id) {
    return this.todoLists.find(todoList => todoList.id === id);
  }
}