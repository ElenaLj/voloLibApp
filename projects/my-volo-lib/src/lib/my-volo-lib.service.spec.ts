import { TestBed } from '@angular/core/testing';

import { MyVoloLibService } from './my-volo-lib.service';

describe('MyVoloLibService', () => {
  let service: MyVoloLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyVoloLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
