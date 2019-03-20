/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AgentvalidationService } from './agentvalidation.service';

describe('AgentvalidationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AgentvalidationService]
    });
  });

  it('should ...', inject([AgentvalidationService], (service: AgentvalidationService) => {
    expect(service).toBeTruthy();
  }));
});
