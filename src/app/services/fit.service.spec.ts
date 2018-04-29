import { TestBed, inject } from '@angular/core/testing';

import { FitService } from './fit.service';

describe('FitService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FitService]
    });
  });

  it('should be created', inject([FitService], (service: FitService) => {
    expect(service).toBeTruthy();
  }));
});
