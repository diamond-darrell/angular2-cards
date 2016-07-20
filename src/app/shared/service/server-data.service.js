import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { getApiUrl } from 'utils/get-api-url/get-api-url.util';

@Injectable()
export class ServerDataService {
  static get parameters() { return [[Http]]; }

  constructor(http) {
    this.http = http;
  }

  getRequestData(data) {
    const body = JSON.stringify(data);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers });

    return [body, options];
  }

  get(url) {
    return this.makeRequest('get', getApiUrl(url));
  }

  post(url, data) {
    const requestData = this.getRequestData(data);

    return this.makeRequest('post', getApiUrl(url), requestData);
  }

  delete(url, param) {
    return this.makeRequest('delete', getApiUrl(url, param));
  }

  put(url, param, data) {
    const requestData = this.getRequestData(data);

    return this.makeRequest('put', getApiUrl(url, param), requestData);
  }

  makeRequest(type, url, params = []) {
    const allowedTypes = ['get', 'post', 'put', 'delete'];

    if (!allowedTypes.includes(type)) {
      throw Error('Disallowed request type');
    }

    return this.http[type](url, ...params)
      .map(res => res.json())
      .catch(this.handleError);
  }

  handleError(error) {
    let errMsg = '';
    if (error.message) {
      errMsg = error.message;
    } else if (error.status) {
      errMsg = `${error.status} - ${error.statusText}`;
    } else {
      errMsg = 'Server error';
    }
    console.error(errMsg);

    return Observable.throw(errMsg);
  }
}
