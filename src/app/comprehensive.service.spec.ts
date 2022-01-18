import { TestBed } from '@angular/core/testing';

import { ComprehensiveService } from './comprehensive.service';

describe('ComprehensiveService', () => {
  let service: ComprehensiveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComprehensiveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
