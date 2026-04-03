import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ApiService } from './api.service';
import { CONFIG_TOKEN } from './injection-tokens/config.token';
import { environment } from '../../environments/environment';

@Injectable()
class TestApiService extends ApiService {}

describe('ApiService', () => {
  let service: TestApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TestApiService,
        provideHttpClient(),
        {
          provide: CONFIG_TOKEN,
          useValue: environment,
        },
      ],
    });
    service = TestBed.inject(TestApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
