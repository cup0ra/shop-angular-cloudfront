import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { CartComponent } from './cart.component';
import { CartService } from './cart.service';
import { CheckoutService } from './checkout.service';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartComponent],
      providers: [
        {
          provide: CartService,
          useValue: {
            addItem: () => {},
            cart: () => ({}),
            removeItem: () => {},
            totalInCart: () => 0,
          },
        },
        {
          provide: CheckoutService,
          useValue: {
            getProductsForCheckout: () => of([]),
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
