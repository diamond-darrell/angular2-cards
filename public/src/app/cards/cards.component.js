import { Component } from 'angular2/core';
import { CardHolderComponent } from './card-holder/card-holder.component';

@Component({
  selector: 'all-cards',
  template: require('./cards.component.html'),
  directives: [CardHolderComponent]
})
export class CardsComponent {
  cardHolders = [
    { id: 1, title: 'Card1', cardsList: [1, 2]},
    { id: 2, title: 'Card2', cardsList: [3]}
  ];

  removeCardHolder(id) {
    //TODO implement removeCardHolder
  }

  addCardHolder() {
    //TODO implement addCardHolder
  }
}