import { Component } from 'angular2/core';
import { CardsComponent } from '../cards/cards.component';

@Component({
  selector: 'my-app',
  directives: [CardsComponent],
  template: '<all-cards></all-cards>'
})

export class AppComponent { }