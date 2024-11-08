import { TestBed } from '@angular/core/testing';

import { DataMonitorService } from './data-monitor.service';

describe('DataMonitorService', () => {
  let service: DataMonitorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataMonitorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
