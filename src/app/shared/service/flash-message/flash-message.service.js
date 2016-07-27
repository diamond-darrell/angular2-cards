/* eslint no-console: "off" */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FlashMessageService {
  showFleshMessageSource: Subject = new Subject();
  showFleshMessage$: Observable = this.showFleshMessageSource.asObservable();

  showMessage(alertType: string, message: string): void {
    const allowedTypes: Array<string> = ['success', 'error', 'info', 'warning'];

    if (!allowedTypes.includes(alertType)) {
      throw Error('Cannot show message: wrong message type!');
    }

    const type = 'error' === alertType ? 'danger' : alertType;
    this.showFleshMessageSource.next({ type, message });
  }
}
