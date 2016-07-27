import { ServerDataService } from 'service/server-data';
import { RequestOptions, BaseRequestOptions, Http } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { provide } from '@angular/core';

import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';

describe('ServerDataService test', () => {
  let service;

  beforeEachProviders(() => [
    ServerDataService,
    MockBackend,
    BaseRequestOptions,
    provide(Http, {
      useFactory: (backend, options) => new Http(backend, options),
      deps: [MockBackend, BaseRequestOptions],
    }),
  ]);

  beforeEach(inject([MockBackend, ServerDataService], (mockbackend, serverDataService) => {
    service = serverDataService;

    mockbackend.connections.subscribe(connection => {
      connection.mockRespond(new Response({ body: JSON.stringify('Test') }));
    });
  }));

  it('should has functions', () => {
    expect(service.getRequestData).toBeFunction();
    expect(service.get).toBeFunction();
    expect(service.post).toBeFunction();
    expect(service.delete).toBeFunction();
    expect(service.put).toBeFunction();
    expect(service.makeRequest).toBeFunction();
    expect(service.handleError).toBeFunction();
  });

  it('getRequestData should return valid resut', () => {
    const data = { text: 'Test' };
    const [body, options] = service.getRequestData(data);

    expect(body).toBe(JSON.stringify(data));
    expect(options instanceof RequestOptions).toBeTrue();
  });

  it('makeRequest should return valid resut', () => {
    expect(() => service.makeRequest('get')).not.toThrow();
    expect(() => service.makeRequest('post')).not.toThrow();
    expect(() => service.makeRequest('put')).not.toThrow();
    expect(() => service.makeRequest('delete')).not.toThrow();
    expect(() => service.makeRequest('test')).toThrow();

    expect(service.makeRequest('get').subscribe).toBeFunction();
  });
});
