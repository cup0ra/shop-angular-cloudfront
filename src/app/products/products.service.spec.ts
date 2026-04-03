import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';

import { ProductsService } from './products.service';
import { CONFIG_TOKEN } from '../core/injection-tokens/config.token';
import { environment } from '../../environments/environment';

describe('ProductsService', () => {
  let service: ProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ProductsService,
        provideHttpClient(),
        {
          provide: CONFIG_TOKEN,
          useValue: environment,
        },
      ],
    });
    service = TestBed.inject(ProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
