/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PlaceOrderService } from './place-order.service';

describe('PlaceOrderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlaceOrderService]
    });
  });

  it('should ...', inject([PlaceOrderService], (service: PlaceOrderService) => {
    expect(service).toBeTruthy();
  }));
});
