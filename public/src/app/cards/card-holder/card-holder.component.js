import { Component, Input, Output, EventEmitter } from 'angular2/core';
import { CardItem } from '../card-item/card-item.component';

@Component({
  selector: 'card-holder',
  directives: [],
  template: require('./card-holder.component.html')

})
export class CardHolderComponent {
  @Input() cardHolder = null;
  @Output() onRemoveCardHolder = new EventEmitter();

  removeCardItem(id) {
    //TODO implement removeCardItem
  }
}