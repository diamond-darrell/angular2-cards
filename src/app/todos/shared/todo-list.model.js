import { UUID } from 'angular2-uuid';

export class TodoList {
    constructor(title) {
      this.id = UUID.UUID();
      this.title = title;
      this.todos = [];
    }
}