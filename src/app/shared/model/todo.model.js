import { UUID } from 'angular2-uuid';

export class Todo {
  constructor(description, id = UUID.UUID(), status = 'active') {
    this.id = id;
    this.description = description;
    this.status = status;
  }

  toggle() {
    this.status = 'active' === this.status ? 'completed' : 'active';
  }

  setDescription(description) {
    if (this.description !== description) {
      this.description = description;
      this.status = 'active';
    }
  }

  isCompleted() {
    return 'completed' === this.status;
  }
}