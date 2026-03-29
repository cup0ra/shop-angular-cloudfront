import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductItemCheckoutComponent } from './product-item-checkout.component';

describe('CartProductItemComponent', () => {
  let component: ProductItemCheckoutComponent;
  let fixture: ComponentFixture<ProductItemCheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductItemCheckoutComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductItemCheckoutComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('product', {
      count: 2,
      description: 'Test description',
      id: 'product-1',
      image: 'image.png',
      orderedCount: 1,
      price: 10,
      title: 'Test product',
      totalPrice: 10,
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
