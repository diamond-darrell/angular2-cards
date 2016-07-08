import { Component, Input, Output, EventEmitter } from 'angular2/core';

@Component({
  selector: 'card-item',
  directives: [],
  template: require('./card-item.component.html')

})
export class CardHolderComponent {
  @Input() card = null;
  @Output() onRemoveCardHolder = new EventEmitter();

  removeCardItem(id) {
    //TODO implement removeCardItem
  }
}