import { TestBed } from '@angular/core/testing';

import { ViagensPostService } from './viagens-post.service';

describe('ViagensPostService', () => {
  let service: ViagensPostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViagensPostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
