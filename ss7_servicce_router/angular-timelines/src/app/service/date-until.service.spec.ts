import { TestBed } from '@angular/core/testing';

import { DateUntilService } from './date-until.service';

describe('DateUntilService', () => {
  let service: DateUntilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DateUntilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
