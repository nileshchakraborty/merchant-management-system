/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GetCatalogsService } from './get-catalogs.service';

describe('GetCatalogsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetCatalogsService]
    });
  });

  it('should ...', inject([GetCatalogsService], (service: GetCatalogsService) => {
    expect(service).toBeTruthy();
  }));
});
