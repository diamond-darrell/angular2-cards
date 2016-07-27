import { Component } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { BoardComponent } from 'app/board';
import { HomeComponent } from 'app/home';

@Component({
  selector: 'my-app',
  directives: [ROUTER_DIRECTIVES],
  template: require('./app.component.html'),
  styles: [require('./app.component.css')],
  precompile: [
    BoardComponent,
    HomeComponent,
  ],
})
export class AppComponent {
  constructor(_router: Router) {
    this.router = _router;
  }
}
