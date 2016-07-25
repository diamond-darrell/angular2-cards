import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FocusDirective } from 'directive/element-focus.directive';

@Component({
  selector: 'card-header',
  directives: [FocusDirective],
  styles: [require('./card-header.component.css')],
  template: require('./card-header.component.html'),
})
export class CardHeaderComponent {
  @Input() title: string = '';
  @Input() placeholder: string = '';
  @Output() onSetTitle:EventEmitter = new EventEmitter();
  @Output() onRemove:EventEmitter = new EventEmitter();

  tmpTitle: string = '';

  setTitle(title: string, isCancel: boolean = false): void {
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
