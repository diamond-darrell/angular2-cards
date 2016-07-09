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

  //FIXME investigate immutable way
  updateTodoList(todoList, title) {
    const todoListIndex = this.todoLists.indexOf(todoList);

    todoList.title = title;

    this.todoLists = [
      ...this.todoLists.slice(0, todoListIndex),
      todoList,
      ...this.todoLists.slice(todoListIndex + 1)
    ];
  }

  removeTodoList(todoList) {
    const todoListIndex = this.todoLists.indexOf(todoList);

    this.todoLists = [
      ...this.todoLists.slice(0, todoListIndex),
      ...this.todoLists.slice(todoListIndex + 1)
    ];
  }
}