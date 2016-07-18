import { Component, Input } from '@angular/core';
import { FlashMessageService } from 'service/flash-message.service';

@Component({
  selector: 'flash-message',
  providers: [FlashMessageService],
  template: `
    <div *ngFor="let message of messages" class="flash-message fade in alert" [ngClass]="message.alertType">
      <span>{{message.message}}</span>
    </div>
  `,
  styles: [`
    .flash-message {
      position: fixed;
      top: 10px;
      right: 10px;
    }
  `]
})
export class FlashMessageComponent {
  @Input() data = {};

  messages = [];

  ngOnChanges() {
    const { type, message } = this.data;
    if (!!type) {
      const alertType = `alert-${type}`;

      this.messages.push({alertType, message});

      setTimeout(() => {
        this.messages.shift();
      }, 5e3);
    }
  }
}