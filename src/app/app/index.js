import { Component } from '@angular/core';
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
  template: require('./app.component.html'),
  styles: [require('./app.component.css')],
})
export class AppComponent {
  static get parameters() {
    return [[CardsService]]
  }

  constructor(cardsService) {
    this.cardsService = cardsService;
  }

  addCardHolder() {
    this.cardsService.addCardHolder();
  }

  removeCardHolder(cardsHolder) {
    this.cardsService.removeCardHolder(cardsHolder);
  }
}