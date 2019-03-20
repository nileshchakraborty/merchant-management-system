/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ValidateserviceService } from './validateservice.service';

describe('ValidateserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ValidateserviceService]
    });
  });

  it('should ...', inject([ValidateserviceService], (service: ValidateserviceService) => {
    expect(service).toBeTruthy();
  }));
});
