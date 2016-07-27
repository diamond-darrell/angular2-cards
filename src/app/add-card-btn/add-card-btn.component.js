import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'add-card-btn',
  styles: [`
    @media (min-width: 992px) {
      button {
        max-width: 110px;
        margin-top: 40px;
      }
    }
  `],
  template: `
  <button class="form-control btn-info add-card"
    (click)="onAddCard.emit()">Add todo list</button>
  `,
})
export class AddCardBtnComponent {
  @Output() onAddCard: EventEmitter = new EventEmitter();
}
