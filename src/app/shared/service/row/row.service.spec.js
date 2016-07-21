import 'zone.js';
import 'reflect-metadata';

import { RowService } from 'service/row/row.service';

import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';

describe('Row service test', () => {
  let service: RowService;

  beforeEachProviders(() => [
    RowService,
  ]);

  beforeEach(inject([RowService], (rowService: RowService) => {
    service = rowService;
  }));

  it('should has properties', () => {
    expect(service.rows).toBeDefined();
    expect(service.dataUrl).toBeDefined();

    expect(service.rows).toBeEmptyArray();
    expect(service.dataUrl).toBeString();
  });
});
