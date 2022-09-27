import { TestBed } from '@angular/core/testing';

import { CarrierService } from './carrier.service';

describe('CarrierService', () => {
  let service: CarrierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarrierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
