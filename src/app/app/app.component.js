import { Component } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { BoardComponent } from 'app/board';
import { HomeComponent } from 'app/home';
import { PageNotFoundComponent } from 'app/page-not-found';
import { LoginFormComponent } from 'app/login-form';
import { AuthService } from 'service/auth';

@Component({
  selector: 'my-app',
  directives: [ROUTER_DIRECTIVES],
  template: require('./app.component.html'),
  styles: [require('./app.component.css')],
  precompile: [
    BoardComponent,
    HomeComponent,
    PageNotFoundComponent,
    LoginFormComponent,
  ],
})
export class AppComponent {
  constructor(_auth: AuthService, _router: Router) {
    this.auth = _auth;
    this.router = _router;
  }

  ngOnInit() {
    this.auth.isAlreadyLogged();
  }

  signout(e) {
    e.preventDefault();

    if (this.auth.signOut()) {
      this.router.navigate(['/']);
    }
  }
}
