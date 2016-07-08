import { Component } from 'angular2/core';
import { CardHolderComponent } from '../cards/card-holder/card-holder.component';
import { AddHolderBtnComponent } from '../cards/add-card-holder-btn/add-card-holder-btn.component';

@Component({
  selector: 'my-app',
  directives: [
    CardHolderComponent,
    AddHolderBtnComponent
  ],
  template: `
  <div class="container">
    <card-holder
      class="row"
      *ngFor="let cardHolder of cardHolders"
      [cardHolder]="cardHolder"
      (onRemoveCardHolder)="removeCardHolder($event)"></card-holder>
    <add-card-holder-btn (onAddCardHolder)="addCardHolder()"></add-card-holder-btn>
  </div>
  `
})
export class AppComponent {
  cardHolders = [
    { id: 1, title: 'Card1', cardsList: [1]}
  ];

  removeCardHolder(id) {
    //TODO implement removeCardHolder
  }

  addCardHolder() {
    //TODO implement addCardHolder
  }
}