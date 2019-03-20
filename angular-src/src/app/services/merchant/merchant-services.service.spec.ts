/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MerchantServicesService } from './merchant-services.service';

describe('MerchantServicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MerchantServicesService]
    });
  });

  it('should ...', inject([MerchantServicesService], (service: MerchantServicesService) => {
    expect(service).toBeTruthy();
  }));
});
