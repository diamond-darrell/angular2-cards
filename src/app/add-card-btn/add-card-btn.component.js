import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'add-card-btn',
  styles: [`button { position: fixed; bottom: 5px; right: 5px; max-width: 100px; }`],
  template: `
  <button class="form-control btn-primary"
    (click)="onAddCard.emit()">Add card</button>`
})
export class AddCardBtnComponent {
  @Output() onAddCard = new EventEmitter();
}