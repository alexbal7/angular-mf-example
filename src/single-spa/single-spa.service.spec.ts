import { TestBed } from '@angular/core/testing';

import { SingleSpaService } from './single-spa.service';

describe('SingleSpaService', () => {
  let service: SingleSpaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SingleSpaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
