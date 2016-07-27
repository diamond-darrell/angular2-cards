import { provideRouter, RouterConfig } from '@angular/router';
import { BoardComponent } from 'app/board';
import { HomeComponent } from 'app/home';

const routes: RouterConfig = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'board', component: BoardComponent },
];

export const appRouterProviders = [provideRouter(routes)];
