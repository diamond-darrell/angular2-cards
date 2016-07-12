import { UUID } from 'angular2-uuid';
import { TodoList } from './todo-list.model';

export class Card {
  constructor(title, id = UUID.UUID(), todoLists = []) {
    this.id = id;
    this.title = title;
    this.todoLists = todoLists;
  }

  getTodoList(id) {
    return this.todoLists.find(todoList => todoList.id === id);
  }

  addTodoList(todoList) {
    if (this.todoLists.length < 3) {
      this.todoLists = [
        ...this.todoLists,
        todoList
      ];
    }
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