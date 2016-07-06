import { bootstrap } from 'angular2/platform/browser';
import { AppComponent } from './components/app.component';

let boot = document.addEventListener('DOMContentLoaded', () => {
  bootstrap(AppComponent);
});

module.exports = boot;