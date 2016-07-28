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
  providers: [AuthService],
  precompile: [
    BoardComponent,
    HomeComponent,
    PageNotFoundComponent,
    LoginFormComponent,
  ],
})
export class AppComponent {
  constructor(_router: Router, _auth: AuthService) {
    this.router = _router;
    this.auth = _auth;
  }

  ngOnInit() {
    this.auth.isAlreadyLogged();
  }
}
