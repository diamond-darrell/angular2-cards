import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TodoInputComponent } from 'app/todo-input/todo-input.component';
import { TodoItemComponent } from 'app/todo-item/todo-item.component';
import { CardHeaderComponent } from 'app/card-header/card-header.component';
import { TodoService } from 'service/todo.service';
import { FilterTodoPipe } from 'pipe/filter-todo.pipe';

@Component({
  selector: 'todo-list',
  pipes: [FilterTodoPipe],
  directives: [
    TodoInputComponent,
    TodoItemComponent,
    CardHeaderComponent
  ],
  template: require('./todo-list.component.html'),
  styles: [require('./todo-list.component.css')],
  providers: [TodoService]
})
export class TodoListComponent {
  @Input() todoList = {};
  @Output() onRemoveTodoList = new EventEmitter();
  @Output() onSetTodoListTitle = new EventEmitter();

  filteredTodos = [];
  currentFilter = 'all'

  static get parameters() { return [[TodoService]] }
  constructor(todoService) {
    this.todoService = todoService;
  }

  ngOnInit() {
    this.filteredTodos = this.todoList.todos;
  }

  filterTodos(todoStatus = 'all') {
    const { todoList } = this;

    this.currentFilter = todoStatus;

    if ('all' === todoStatus) {
      this.filteredTodos = todoList.todos;

    } else {
      this.filteredTodos = todoList.todos.filter(({status}) => status === todoStatus);
    }
  }

  setTodoListTitle(title) {
    const card = this.todoList;

    this.onSetTodoListTitle.emit({title, card});
  }

  addTodo(description) {
    this.todoService.addTodo(this.todoList, description, () => {
      this.filterTodos(this.currentFilter);
    });
  }

  removeTodo(todo) {
    this.todoService.removeTodo(this.todoList, todo, () => {
      this.filterTodos(this.currentFilter);
    });
  }

  toggleTodo(todo) {
    this.todoService.toggleTodo(this.todoList, todo, () => {
      this.filterTodos(this.currentFilter);
    });
  }

  updateTodo(params) {
    this.todoService.updateTodoDescription(this.todoList, params, () => {
      this.filterTodos(this.currentFilter);
    });
  }
}