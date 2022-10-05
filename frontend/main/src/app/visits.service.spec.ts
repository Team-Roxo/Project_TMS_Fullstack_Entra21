import { TestBed } from '@angular/core/testing';

import { VisitsService } from './visits.service';

describe('VisitsService', () => {
  let service: VisitsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisitsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
