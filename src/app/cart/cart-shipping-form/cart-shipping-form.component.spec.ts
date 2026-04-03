import { ComponentFixture, TestBed } from '@angular/core/testing';
import { form } from '@angular/forms/signals';
import { signal } from '@angular/core';

import { CartShippingFormComponent } from './cart-shipping-form.component';

describe('CartShippingFormComponent', () => {
  let component: CartShippingFormComponent;
  let fixture: ComponentFixture<CartShippingFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartShippingFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartShippingFormComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput(
      'shippingInfo',
      TestBed.runInInjectionContext(() =>
        form(
          signal({
            address: '',
            comment: '',
            firstName: '',
            lastName: '',
          }),
        ),
      ),
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
