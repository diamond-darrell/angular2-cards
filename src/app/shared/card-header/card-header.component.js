import { Component, Input, Output, EventEmitter } from 'angular2/core';

@Component({
  selector: 'card-header',
  styles: [`.title-input { max-width: 95%;  display: inline-block; }`],
  template: `
    <input class="form-control title-input" placeholder="{{placeholder}}"
      #tlTitle
      *ngIf="!title"
      (keyUp.enter)="onSetTitle.emit(tlTitle.value)" />
    <button class="close ligth" (click)="onRemove.emit()">&times;</button>
  `
})
export class CardHeaderComponent {
  @Input() title = '';
  @Input() placeholder = '';
  @Output() onSetTitle = new EventEmitter();
  @Output() onRemove = new EventEmitter();
}