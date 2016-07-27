import { Todo } from 'model/todo';

export class Card {
  constructor(id: number, rowId: number, title: string = '', todos: Array<Todo> = []): void {
    this.id = id;
    this.rowId = rowId;
    this.title = title;
    this.todos = todos;
  }

  setTodos(todos: Array<Todo>): void {
    this.todos = todos;
  }

  setTitle(title: string): void {
    this.title = title;
  }

  toPOJO(): { rowId: string, title: string, todos: Array<Todo> } {
    const { rowId, title } = this;
    const todos = this.todos.map(todo => todo.toPOJO());

    return { rowId, title, todos };
  }
}
