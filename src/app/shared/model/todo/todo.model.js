export class Todo {
  constructor(description: string = '', status: string = 'active'): void {
    this.description = description;
    this.status = status;
  }

  toPOJO(): void {
    const { description, status } = this;
    return { description, status };
  }

  toggle(): void {
    this.status = 'active' === this.status ? 'completed' : 'active';
  }

  setDescription(description: string): void {
    if (this.description !== description) {
      this.description = description;
      this.status = 'active';
    }
  }

  isCompleted(): boolean {
    return 'completed' === this.status;
  }
}
