export class TodoList {
    constructor(id, cardId, title = '', todos = []) {
      this.id = id;
      this.cardId = cardId;
      this.title = title;
      this.todos = todos;
    }

    setTodos(todos) {
      this.todos = todos;
    }
}