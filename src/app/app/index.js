import { Component } from 'angular2/core';
import { CardHolderComponent } from '../cards/card-holder/card-holder.component';
import { AddHolderBtnComponent } from '../cards/add-card-holder-btn/add-card-holder-btn.component';
import { CardsService } from '../cards/shared/cards.service';

@Component({
  selector: 'my-app',
  providers: [CardsService],
  directives: [
    CardHolderComponent,
    AddHolderBtnComponent
  ],
  template: `
  <div class="container">
    <card-holder
      class="row"
      *ngFor="let cardHolder of cardsService.cards"
      [cardHolder]="cardHolder"
      (onRemoveCardHolder)="removeCardHolder($event)"></card-holder>
    <add-card-holder-btn (onAddCardHolder)="addCardHolder()"></add-card-holder-btn>
  </div>
  `
})
export class AppComponent {
  static get parameters() {
    return [[CardsService]]
  }

  constructor(cardsService) {
    this.cardsService = cardsService;
  }
}