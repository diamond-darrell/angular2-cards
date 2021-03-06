import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'service/auth';

@Injectable()
export class AuthGuard {
  constructor(_auth: AuthService, _router: Router) {
    this.auth = _auth;
    this.router = _router;
  }

  canActivate() {
    if (this.auth.isLoggedIn) {
      return true;
    }

    this.router.navigate(['/signin']);
    return false;
  }
}
