import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  directives: [ROUTER_DIRECTIVES],
  selector: 'page-not-found',
  template: `
    <h1>404 Page Not Found ¯\\_(ツ)_/¯</h1>
    <p>
      Back to <a routerLink="/">Home</a>
    </p>
  `,
  styles: [
    'h1 { font-size: 2.5em; }',
    'p { font-size: 1.5em; }',
  ],
})
export class PageNotFoundComponent { }
