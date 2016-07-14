import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class FlashMessageService {
  showFleshMessageSource = new Subject();
  showFleshMessage$ = this.showFleshMessageSource.asObservable();

  showMessage(type, message) {
    const allowedTypes = ['success', 'error', 'info', 'warning'];

    if (!allowedTypes.includes(type)) {
      console.warn('Cannot show message: wrong message type!');
      return;
    }

    type = 'error' === type ? 'danger' : type;
    this.showFleshMessageSource.next({type, message});
  }
}