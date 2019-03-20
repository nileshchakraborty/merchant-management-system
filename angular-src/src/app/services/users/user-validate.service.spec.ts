/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserValidateService } from './user-validate.service';

describe('UserValidateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserValidateService]
    });
  });

  it('should ...', inject([UserValidateService], (service: UserValidateService) => {
    expect(service).toBeTruthy();
  }));
});
