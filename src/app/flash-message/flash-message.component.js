import { Component } from '@angular/core';
import { FlashMessageService } from 'service/flash-message.service';

@Component({
  selector: 'flash-message',
  providers: [FlashMessageService],
  template: `
    <div *ngIf="isDisplayed" class="flash-message fade in alert" [ngClass]="alertType">
      <span>{{message}}</span>
    </div>
  `,
  styles: [`
    .error {
      position: fixed;
      top: 10px;
      right: 10px;
    }
  `]
})
export class FlashMessageComponent {
  static get parameters() { return [[FlashMessageService]]; }
  constructor(service) {
    this.subscription = service.showFleshMessage$.subscribe(
      (params) => {
        console.warn(params);
        this.showFleshMessage(params);
      }
    );
  }

  isDisplayed = false;
  alertType = '';
  message = '';

  showFleshMessage({type, message}) {
    this.isDisplayed = true;
    this.alertType = `alert-${type}`;
    this.message = message;

    setTimeOut(this.hideFleshMessage.bind(this), 3e5);
  }

  hideFleshMessage() {
    this.isDisplayed = false;
    this.alertType = '';
    this.message = '';
  }

  ngOnDestroy() {
   this.subscription.unsubscribe();
 }
}