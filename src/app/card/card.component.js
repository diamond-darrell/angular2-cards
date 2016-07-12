import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TodoListComponent } from '../todo-list/todo-list.component';
import { AddTodoListBtnComponent } from '../add-todo-list-btn/add-todo-list-btn.component';
import { CardHeaderComponent } from '../card-header/card-header.component';
import { TodoListService } from '../shared/service/todo-list.service';

@Component({
  selector: 'card-holder',
  providers: [TodoListService],
  directives: [
    TodoListComponent,
    AddTodoListBtnComponent,
    CardHeaderComponent
  ],
  template: require('./card.component.html'),
  styles: [`
    .panel-body {
      min-height: 165px;
    }
  `]
})
export class CardComponent {
  @Input() card = null;
  @Output() onRemoveCard = new EventEmitter();
  @Output() onUpdateCardTitle = new EventEmitter();

  static get parameters() { return [[TodoListService]]; }

  constructor(todoListService) {
    this.todoListService = todoListService;
  }

  addTodoList() {
    this.todoListService.addTodoList(this.card);
  }

  removeTodoList(todoList) {
    this.todoListService.removeTodoList(this.card, todoList);
  }

  setTodoListTitle(params) {
    this.todoListService.updateTodoListTitle(this.card, params);
  }

  setCardTitle(title) {
    const { card } = this;
    this.onUpdateCardTitle.emit({card, title});
  }
}