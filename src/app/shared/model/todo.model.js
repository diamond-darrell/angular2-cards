export class Todo {
  constructor(id, description = '', status = 'active') {
    this.id = id;
    this.description = description;
    this.status = status;
  }

  toJSON() {
    return {
      description: this.description,
      status: this.status
    }
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