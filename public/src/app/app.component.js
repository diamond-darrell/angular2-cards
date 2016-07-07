import { Component } from 'angular2/core';

@Component({
  selector: 'my-app',
  template: '<h1 class="text-info">Hello, {{name}}!</h1>'
})

export class AppComponent {
  constructor() {
    this.name = 'world';
  }
}