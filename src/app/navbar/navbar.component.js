import { Component } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';

import { AuthService } from 'service/auth';

@Component({
  selector: 'nav-bar',
  directives: [ROUTER_DIRECTIVES],
  template: require('./navbar.component.html'),
  styles: [require('./navbar.component.css')],
})
export class NavbarComponent {
  constructor(_auth: AuthService, _router: Router): void {
    this.auth = _auth;
    this.router = _router;
  }

  signout(e): void {
    e.preventDefault();

    if (this.auth.signOut()) {
      this.router.navigate(['/']);
    }
  }
}
