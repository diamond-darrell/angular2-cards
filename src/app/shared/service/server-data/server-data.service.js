import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { getApiUrl } from 'utils/get-api-url/get-api-url.util';

@Injectable()
export class ServerDataService {
  constructor(http: Http): void {
    this.http = http;
  }

  getRequestData(data: any): Array<any> {
    const body = JSON.stringify(data);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers });

    return [body, options];
  }

  get(url: string): void {
    return this.makeRequest('get', getApiUrl(url));
  }

  post(url: string, data: any): Observable {
    const requestData = this.getRequestData(data);

    return this.makeRequest('post', getApiUrl(url), requestData);
  }

  delete(url: string, param: Array<any>): Observable {
    return this.makeRequest('delete', getApiUrl(url, param));
  }

  put(url: string, param: Array<any>, data: any): Observable {
    const requestData = this.getRequestData(data);

    return this.makeRequest('put', getApiUrl(url, param), requestData);
  }

  makeRequest(type: string, url: string, params: Array<any> = []): Observable {
    const allowedTypes = ['get', 'post', 'put', 'delete'];

    if (!allowedTypes.includes(type)) {
      throw Error('Disallowed request type');
    }

    return this.http[type](url, ...params)
      .map(res => res.json())
      .catch(this.handleError);
  }

  handleError(error: string): Observable {
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
