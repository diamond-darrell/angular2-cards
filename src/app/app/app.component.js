import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { BoardComponent } from 'app/board';
import { HomeComponent } from 'app/home';
import { PageNotFoundComponent } from 'app/page-not-found';
import { LoginFormComponent } from 'app/login-form';
import { NavbarComponent } from 'app/navbar';
import { AuthService } from 'service/auth';

@Component({
  selector: 'my-app',
  template: require('./app.component.html'),
  styles: [require('./app.component.css')],
  directives: [
    NavbarComponent,
    ROUTER_DIRECTIVES,
  ],
  precompile: [
    BoardComponent,
    HomeComponent,
    PageNotFoundComponent,
    LoginFormComponent,
  ],
})
export class AppComponent {
  constructor(_auth: AuthService): void {
    this.auth = _auth;
  }

  ngOnInit(): void {
    this.auth.isAlreadyLogged();
  }
}
