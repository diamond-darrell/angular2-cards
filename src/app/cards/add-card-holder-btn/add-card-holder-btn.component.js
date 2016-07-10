import { Component, Output, EventEmitter } from 'angular2/core';

@Component({
  selector: 'add-card-holder-btn',
  styles: [`button { position: fixed; bottom: 5px; right: 5px; max-width: 100px; }`],
  template: `
  <button class="form-control btn-primary"
    (click)="onAddCardHolder.emit()">Add card</button>`
})
export class AddHolderBtnComponent {
  @Output() onAddCardHolder = new EventEmitter();
}