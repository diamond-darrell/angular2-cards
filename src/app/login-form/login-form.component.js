import { Component } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { AuthService } from 'service/auth';

@Component({
  directives: [ROUTER_DIRECTIVES],
  selector: 'login-form',
  template: require('./login-form.component.html'),
})
export class LoginFormComponent {
  showPassword: boolean = false;
  hasError: boolean = false;
  user: { login: string, password: string } = {};

  constructor(_router: Router, _auth: AuthService) {
    this.router = _router;
    this.auth = _auth;
  }

  login() {
    const success = this.auth.signIn(this.user);
    if (success) {
      this.router.navigate(['/board']);
    } else {
      this.hasError = true;
    }
  }
}
