import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TodoInputComponent } from 'app/todo-input/todo-input.component';
import { TodoItemComponent } from 'app/todo-item/todo-item.component';
import { CardHeaderComponent } from 'app/card-header/card-header.component';
import { TodoService } from 'service/todo.service';
import { Row } from 'model/row/row.model';
import { Todo } from 'model/todo/todo.model';

@Component({
  selector: 'todo-list',
  directives: [
    TodoInputComponent,
    TodoItemComponent,
    CardHeaderComponent,
  ],
  template: require('./todo-list.component.html'),
  styles: [require('./todo-list.component.css')],
  providers: [TodoService],
})
export class TodoListComponent {
  @Input() todoList: Row = {};
  @Output() onRemoveTodoList: EventEmitter = new EventEmitter();
  @Output() onSetTodoListTitle: EventEmitter = new EventEmitter();

  filteredTodos: Array<Todo> = [];
  currentFilter = 'all'

  constructor(todoService: TodoService): void {
    this.todoService = todoService;
  }

  ngOnInit(): void {
    this.filteredTodos = this.todoList.todos;
  }

  filterTodos(todoStatus: string = 'all'): void {
    const { todoList } = this;

    this.currentFilter = todoStatus;

    if ('all' === todoStatus) {
      this.filteredTodos = todoList.todos;
    } else {
      this.filteredTodos = todoList.todos.filter(({ status }) => status === todoStatus);
    }
  }

  setTodoListTitle(title: string): void {
    const card = this.todoList;

    this.onSetTodoListTitle.emit({ title, card });
  }

  addTodo(description: string): void {
    this.todoService.addTodo(this.todoList, description, () => {
      this.filterTodos(this.currentFilter);
    });
  }

  removeTodo(todo: Todo): void {
    this.todoService.removeTodo(this.todoList, todo, () => {
      this.filterTodos(this.currentFilter);
    });
  }

  toggleTodo(todo: Todo): void {
    this.todoService.toggleTodo(this.todoList, todo, () => {
      this.filterTodos(this.currentFilter);
    });
  }

  updateTodo(params: { todo: Todo, decsription: string }): void {
    this.todoService.updateTodoDescription(this.todoList, params, () => {
      this.filterTodos(this.currentFilter);
    });
  }
}
