import { TestBed } from '@angular/core/testing';

import { FavovirteService } from './favovirte.service';

describe('FavovirteService', () => {
  let service: FavovirteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavovirteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
