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
      /* eslint-disable */
      console.warn('Cannot show message: wrong message type!');
      /* eslint-enable */
      return;
    }

    const type = 'error' === alertType ? 'danger' : alertType;
    this.showFleshMessageSource.next({ type, message });
  }
}
