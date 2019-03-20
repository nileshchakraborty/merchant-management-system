/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MerchantAuthServiceService } from './merchant-auth-service.service';

describe('MerchantAuthServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MerchantAuthServiceService]
    });
  });

  it('should ...', inject([MerchantAuthServiceService], (service: MerchantAuthServiceService) => {
    expect(service).toBeTruthy();
  }));
});
