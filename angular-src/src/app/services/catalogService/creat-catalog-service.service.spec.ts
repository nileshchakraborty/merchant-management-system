/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CreatCatalogServiceService } from './creat-catalog-service.service';

describe('CreatCatalogServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreatCatalogServiceService]
    });
  });

  it('should ...', inject([CreatCatalogServiceService], (service: CreatCatalogServiceService) => {
    expect(service).toBeTruthy();
  }));
});
