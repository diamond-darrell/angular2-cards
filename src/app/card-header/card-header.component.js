import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FocusDirective } from '../shared/directive/element-focus.directive';

@Component({
  selector: 'card-header',
  directives: [FocusDirective],
  styles: [require('./card-header.component.css')],
  template: require('./card-header.component.html')
})
export class CardHeaderComponent {
  @Input() title = '';
  @Input() placeholder = '';
  @Output() onSetTitle = new EventEmitter();
  @Output() onRemove = new EventEmitter();

  tmpTitle = '';

  setTitle(title, isCancel = false) {
    const { tmpTitle } = this;

    if (!title || isCancel && !tmpTitle) {
      return;
    }

    if (tmpTitle === title) {
      this.title = tmpTitle;

    } else {
      this.onSetTitle.emit(title);
    }
  }
}