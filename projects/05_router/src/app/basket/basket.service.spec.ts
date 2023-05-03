import { TestBed } from '@angular/core/testing';

import { ApiService } from '../shared/services/api.service';
import { ApiServiceMock } from '../shared/services/api.service.mock';
import { BasketService } from './basket.service';

describe('BasketService', () => {
  let service: BasketService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: ApiService,
          useValue: ApiServiceMock,
        },
      ],
    });
    service = TestBed.inject(BasketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
