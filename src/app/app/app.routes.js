import { provideRouter, RouterConfig } from '@angular/router';
import { BoardComponent } from 'app/board';
import { HomeComponent } from 'app/home';
import { LoginFormComponent } from 'app/login-form';
import { PageNotFoundComponent } from 'app/page-not-found';

const routes: RouterConfig = [
  { path: '', component: HomeComponent },
  { path: 'board', component: BoardComponent },
  { path: 'signin', component: LoginFormComponent },
  { path: '**', component: PageNotFoundComponent },
];

export const appRouterProviders = [provideRouter(routes)];
