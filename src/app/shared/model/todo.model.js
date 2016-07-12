export class Todo {
  constructor(id, todoListId, description = '', status = 'active') {
    this.id = id;
    this.todoListId = todoListId;
    this.description = description;
    this.status = status;
  }

  toJSON() {
    return {
      todoListId: this.todoListId,
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