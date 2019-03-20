/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GetOrdersService } from './get-orders.service';

describe('GetOrdersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetOrdersService]
    });
  });

  it('should ...', inject([GetOrdersService], (service: GetOrdersService) => {
    expect(service).toBeTruthy();
  }));
});
