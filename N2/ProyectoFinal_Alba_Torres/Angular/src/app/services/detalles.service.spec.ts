import { TestBed } from '@angular/core/testing';

import { DetallesService } from './detalles.service';

describe('DetallesService', () => {
  let service: DetallesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetallesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
