export class Card {
  constructor(id, rowId, title = '', todos = []) {
    this.id = id;
    this.rowId = rowId;
    this.title = title;
    this.todos = todos;
  }

  setTodos(todos) {
    this.todos = todos;
  }

  setTitle(title) {
    this.title = title;
  }

  toPOJO() {
    const { rowId, title } = this;
    const todos = this.todos.map(todo => todo.toPOJO());

    return { rowId, title, todos };
  }
}
