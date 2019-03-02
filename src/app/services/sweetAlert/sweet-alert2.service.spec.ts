import { TestBed } from '@angular/core/testing';

import { SweetAlert2Service } from './sweet-alert2.service';

describe('SweetAlert2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SweetAlert2Service = TestBed.get(SweetAlert2Service);
    expect(service).toBeTruthy();
  });
});
