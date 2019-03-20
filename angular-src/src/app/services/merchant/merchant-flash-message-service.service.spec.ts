/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MerchantFlashMessageServiceService } from './merchant-flash-message-service.service';

describe('MerchantFlashMessageServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MerchantFlashMessageServiceService]
    });
  });

  it('should ...', inject([MerchantFlashMessageServiceService], (service: MerchantFlashMessageServiceService) => {
    expect(service).toBeTruthy();
  }));
});
