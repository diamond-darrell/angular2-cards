import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class FlashMessageService {
  showFleshMessageSource = new Subject();
  showFleshMessage$ = this.showFleshMessageSource.asObservable();

  showMessage(alertType, message) {
    const allowedTypes = ['success', 'error', 'info', 'warning'];

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
