import { Injectable } from '@angular/core';
import tokenGenerator from 'token-generator';

@Injectable()
export class AuthService {
  isLoggedIn: boolean = false;
  login: string = 'Test';
  password: string = 'angular2'

  constructor() {
    this.tokenGenerator = tokenGenerator({
      salt: 'angular2-card',
      timestampMap: String(Number(new Date())).slice(-10),
    });
  }

  signIn({ login, password }) {
    if (this.login === login && this.password === password) {
      localStorage.setItem('user-token', this.tokenGenerator.generate());
      this.isLoggedIn = true;
    }

    return this.isLoggedIn;
  }

  signOut() {
    localStorage.removeItem('user-token');
    this.isLoggedIn = false;
  }

  isAlreadyLogged() {
    const token = localStorage.getItem('user-token');

    if (token) {
      this.token = token;
      this.isLoggedIn = true;
    }
  }
}
