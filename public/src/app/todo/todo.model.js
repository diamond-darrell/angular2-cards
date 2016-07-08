import { UUID } from 'angular2-uuid';

export class Todo {
  constructor(description, status = 'active') {
    this.id = UUID.UUID();
    this.description = description;
    this.status = status;
  }

  toggle() {
    this.status = 'active' === this.status ? 'completed' : 'active';
  }
}