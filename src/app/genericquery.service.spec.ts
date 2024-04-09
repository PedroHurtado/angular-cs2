import { TestBed } from '@angular/core/testing';

import { GenericqueryService } from './genericquery.service';

describe('GenericqueryService', () => {
  let service: GenericqueryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenericqueryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
