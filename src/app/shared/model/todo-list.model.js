export class TodoList {
    constructor(id, title, todos = []) {
      this.id = id;
      this.title = title;
      this.todos = todos;
    }

    setTodos(todos) {
      this.todos = todos;
    }
}