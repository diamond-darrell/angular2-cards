import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { getApiUrl } from '../../utils/get-api-url.util';

@Injectable()
export class ServerDataService {
  static get parameters() { return [[Http]]; }

  constructor(http) {
    this.http = http;
  }

  getCards() {
    return this.makeRequest('get', 'card-expanded');
  }

  getTodos() {
    return this.makeRequest('get', 'todos');
  }

  makeRequest(type, url) {
    const allowedTypes = ['get', 'post', 'put', 'delete'];

    if (!allowedTypes.includes(type)) {
      throw 'Disallowed request type';
    }

    return this.http[type](getApiUrl(url))
      .map(res => res.json())
      .catch(err => err);
  }
}

