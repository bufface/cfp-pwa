/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LogrosService } from './logros.service';

describe('Service: Logros', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LogrosService]
    });
  });

  it('should ...', inject([LogrosService], (service: LogrosService) => {
    expect(service).toBeTruthy();
  }));
});
