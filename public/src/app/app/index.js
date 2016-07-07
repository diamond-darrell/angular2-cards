import { Component } from 'angular2/core';
import { CardHolderComponent } from '../card-holder';

@Component({
  selector: 'my-app',
  directives: [CardHolderComponent],
  template: '<card-holder></card-holder>'
})

export class AppComponent {
  constructor() {
    this.name = 'world';
  }
}