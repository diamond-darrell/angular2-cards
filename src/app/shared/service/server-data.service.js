import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { getApiUrl } from '../../utils/get-api-url.util';

@Injectable()
export class ServerDataService {
  static get parameters() { return [[Http]]; }

  constructor(http) {
    this.http = http;
  }

  get(url) {
    return this.makeRequest('get', getApiUrl(url));
  }

  post(url, data) {
    const body = JSON.stringify(data);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers });

    return this.makeRequest('post', getApiUrl(url), [body, options])
  }

  delete(url, param) {
    return this.makeRequest('delete', getApiUrl(url, param));
  }

  put(url, param, data) {
    const body = JSON.stringify(data);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers });

    return this.makeRequest('put', getApiUrl(url, param), [body, options])
  }

  makeRequest(type, url, params = []) {
    const allowedTypes = ['get', 'post', 'put', 'delete'];

    if (!allowedTypes.includes(type)) {
      throw 'Disallowed request type';
    }

    return this.http[type](url, ...params)
      .map(res => res.json())
      .catch(err => err);
  }
}

