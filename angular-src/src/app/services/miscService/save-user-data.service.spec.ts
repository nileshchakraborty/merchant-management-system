/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SaveUserDataService } from './save-user-data.service';

describe('SaveUserDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SaveUserDataService]
    });
  });

  it('should ...', inject([SaveUserDataService], (service: SaveUserDataService) => {
    expect(service).toBeTruthy();
  }));
});
