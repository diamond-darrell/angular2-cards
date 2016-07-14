export class Todo {
  constructor(description = '', status = 'active') {
    this.description = description;
    this.status = status;
  }

  toPOJO() {
    const { description, status } = this;
    
    return { description, status };
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