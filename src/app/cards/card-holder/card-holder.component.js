import { Component, Input, Output, EventEmitter } from 'angular2/core';
import { CardHolderItem } from '../card-holder-item/card-holder-item.component';

@Component({
  selector: 'card-holder',
  directives: [CardHolderItem],
  template: require('./card-holder.component.html')
})
export class CardHolderComponent {
  @Input() cardHolder = null;
  @Output() onRemoveCardHolder = new EventEmitter();

  //TODO take from cardHolder.cardsList
  cardsList = [
    { id: 1, title: 'Todos1' }
  ];

  removeCardItem(id) {
    //TODO implement removeCardItem
  }
}