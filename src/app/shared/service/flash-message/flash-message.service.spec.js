import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import { FlashMessageService } from 'service/flash-message';

import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';

describe('Flash-message service test', () => {
  let service: FlashMessageService;

  beforeEachProviders(() => [FlashMessageService]);

  beforeEach(inject([FlashMessageService], (fmService: FlashMessageService) => {
    service = fmService;
  }));

  it('should has properties', () => {
    expect(service.showFleshMessageSource).toBeDefined();
    expect(service.showFleshMessage$).toBeDefined();

    expect(service.showFleshMessageSource instanceof Subject).toBeTrue();
    expect(service.showFleshMessage$ instanceof Observable).toBeTrue();
  });


  it('showMessage should emit event', () => {
    service.showFleshMessage$.subscribe(
      ({ type, message }) => {
        expect(type).toBe('success');
        expect(message).toBe('test');
      }
    );

    service.showMessage('success', 'test');
  });

  it('showMessage should receive allowed types', () => {
    const allowedTypes = ['success', 'error', 'info', 'warning'];

    allowedTypes.forEach(type => {
      expect(() => service.showMessage(type, 'message')).not.toThrow();
    });

    expect(() => service.showMessage('wrong', 'message')).toThrow();
  });
});
