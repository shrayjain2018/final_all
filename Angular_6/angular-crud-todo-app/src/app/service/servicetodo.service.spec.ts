import { TestBed } from '@angular/core/testing';

import { ServicetodoService } from './servicetodo.service';

describe('ServicetodoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicetodoService = TestBed.get(ServicetodoService);
    expect(service).toBeTruthy();
  });
});
