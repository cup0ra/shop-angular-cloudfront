import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductItemComponent } from './product-item.component';
import { CartService } from '../../cart/cart.service';

describe('ProductItemComponent', () => {
  let component: ProductItemComponent;
  let fixture: ComponentFixture<ProductItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductItemComponent],
      providers: [
        {
          provide: CartService,
          useValue: {
            addItem: () => {},
            cart: () => ({}),
            removeItem: () => {},
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductItemComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('index', 0);
    fixture.componentRef.setInput('product', {
      count: 3,
      description: 'Test description',
      id: 'product-1',
      image: 'image.png',
      price: 10,
      title: 'Test product',
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
