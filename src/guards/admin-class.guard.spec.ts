import { TestBed } from '@angular/core/testing';

import { AdminClassGuard } from './admin-class.guard';

describe('AdminClassGuard', () => {
  let guard: AdminClassGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AdminClassGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
