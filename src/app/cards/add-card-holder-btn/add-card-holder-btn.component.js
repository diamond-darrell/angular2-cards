import { Component, Output, EventEmitter } from 'angular2/core';

@Component({
  selector: 'add-card-holder-btn',
  template: `
  <button class="form-control btn-primary"
    (click)="onAddCardHolder.emit()">Add card</button>`
})
export class AddHolderBtnComponent {
  @Output() onAddCardHolder = new EventEmitter();
}