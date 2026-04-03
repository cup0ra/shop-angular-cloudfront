import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';

import { ManageProductsService } from './manage-products.service';
import { CONFIG_TOKEN } from '../../core/injection-tokens/config.token';
import { environment } from '../../../environments/environment';

describe('ManageProductsService', () => {
  let service: ManageProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ManageProductsService,
        provideHttpClient(),
        {
          provide: CONFIG_TOKEN,
          useValue: environment,
        },
      ],
    });
    service = TestBed.inject(ManageProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
