/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CartServiceService } from './cart-service.service';

describe('CartServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CartServiceService]
    });
  });

  it('should ...', inject([CartServiceService], (service: CartServiceService) => {
    expect(service).toBeTruthy();
  }));
});
