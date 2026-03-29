import { TestBed } from '@angular/core/testing';
import { CartService } from './cart.service';
import { of } from 'rxjs';

import { CheckoutService } from './checkout.service';
import { ProductsService } from '../products/products.service';

describe('CheckoutService', () => {
  let service: CheckoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CheckoutService,
        {
          provide: CartService,
          useValue: {
            cart: () => ({}),
          },
        },
        {
          provide: ProductsService,
          useValue: {
            getProductsForCheckout: () => of([]),
          },
        },
      ],
    });
    service = TestBed.inject(CheckoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
