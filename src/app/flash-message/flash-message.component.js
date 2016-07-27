import { Component, Input } from '@angular/core';

@Component({
  selector: 'flash-message',
  template: `
    <div class="col-md-4 col-md-offset-8 flash-messages">
      <div *ngFor="let message of messages" class="fade in alert" [ngClass]="message.alertType">
        <span>{{message.message}}</span>
      </div>
    </div>
  `,
  styles: [`
    @media (min-width: 992px) {
      .flash-messages {
        position: absolute;
        top: 10px;
        right: -5px;
      }
    }
  `],
})
export class FlashMessageComponent {
  @Input() data: { type: string, message: string } = {};

  messages: Array<{ type: string, message: string }> = [];
  maxStackCount: number = 5;

  ngOnChanges(): void {
    const { type, message } = this.data;
    if (!!type) {
      const alertType = `alert-${type}`;

      if (this.messages.length >= this.maxStackCount) {
        this.messages.shift();
      }
      this.messages.push({ alertType, message });

      setTimeout(() => {
        this.messages.shift();
      }, 5e3);
    }
  }
}
