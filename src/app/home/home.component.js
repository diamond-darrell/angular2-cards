import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { AuthService } from 'service/auth';

@Component({
  selector: 'home-screen',
  directives: [ROUTER_DIRECTIVES],
  template: `
    <h1>Welcome in to Angular2 Cards app.</h1>
    <p *ngIf="!auth.isLoggedIn">
      Please <a routerLink="/signin">sign in</a> to start working with app <br />
      (Login: Test, Password: angular2)
    </p>
    <p *ngIf="auth.isLoggedIn">Go to <a routerLink="/board">board</a> to start working with app</p>
  `,
})
export class HomeComponent {
  constructor(_auth: AuthService): void {
    this.auth = _auth;
  }
}
