import { Component } from '@angular/core';
import { BoardComponent } from 'app/board';

@Component({
  selector: 'my-app',
  directives: [BoardComponent],
  template: '<cards-board></cards-board>',
})
export class AppComponent {}
