import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'add-row-btn',
  styles: ['button { position: fixed; bottom: 5px; right: 5px; max-width: 100px; }'],
  template: `
  <button class="form-control btn-primary"
    (click)="onAddRow.emit()">Add row</button>`,
})
export class AddRowBtnComponent {
  @Output() onAddRow = new EventEmitter();
}
