import { UUID } from 'angular2-uuid';

export class TodoList {
    constructor(title, id=UUID.UUID(), todos = []) {
      this.id = id;
      this.title = title;
      this.todos = todos;
    }
}