import { provideRouter, RouterConfig } from '@angular/router';

import { BoardComponent } from 'app/board';
import { HomeComponent } from 'app/home';
import { LoginFormComponent } from 'app/login-form';
import { PageNotFoundComponent } from 'app/page-not-found';

import { AuthService } from 'service/auth';

import { AuthGuard } from 'service/auth-guard';
import { LoginGuard } from 'service/login-guard';

const routes: RouterConfig = [
  { path: '', component: HomeComponent },
  { path: 'board', component: BoardComponent, canActivate: [AuthGuard] },
  { path: 'signin', component: LoginFormComponent, canActivate: [LoginGuard] },
  { path: '**', component: PageNotFoundComponent },
];

export const appRouterProviders = [
  provideRouter(routes),
  AuthService,
  AuthGuard,
  LoginGuard,
];
