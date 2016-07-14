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

    toPOJO() {
      let { rowId, title, todos } = this;
      todos = todos.map(todo => todo.toPOJO())

      return { rowId, title, todos }
    }
}