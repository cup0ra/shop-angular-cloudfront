import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  signal,
} from '@angular/core';
import { form, required } from '@angular/forms/signals';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { CheckoutService } from './checkout.service';
import { CartService } from './cart.service';
import {
  CartShippingFormComponent,
  ShippingForm,
  ShippingModel,
} from './cart-shipping-form/cart-shipping-form.component';
import { MatButton } from '@angular/material/button';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import {
  MatStep,
  MatStepper,
  MatStepperNext,
  MatStepperPrevious,
} from '@angular/material/stepper';
import { MatCard, MatCardContent, MatCardTitle } from '@angular/material/card';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false },
    },
  ],
  imports: [
    MatCard,
    MatCardTitle,
    MatCardContent,
    MatStepper,
    MatStep,
    OrderSummaryComponent,
    MatProgressSpinner,
    MatButton,
    MatStepperNext,
    CartShippingFormComponent,
    MatStepperPrevious,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartComponent {
  private readonly checkoutService = inject(CheckoutService);
  private readonly cartService = inject(CartService);

  products = toSignal(this.checkoutService.getProductsForCheckout(), {
    initialValue: [],
  });

  totalPrice = computed(() => {
    const products = this.products();
    const total = products.reduce((acc, val) => acc + val.totalPrice, 0);
    return +total.toFixed(2);
  });

  cartNotEmpty = computed(() => {
    return this.cartService.totalInCart() > 0;
  });

  shippingModel = signal<ShippingModel>({
    address: '',
    comment: '',
    firstName: '',
    lastName: '',
  });

  shippingInfo: ShippingForm = form(this.shippingModel, (path) => {
    required(path.firstName, { message: 'First name is required!' });
    required(path.lastName, { message: 'Last name is required!' });
    required(path.address, { message: 'Shipping address is required!' });
  });

  get fullName(): string {
    const { firstName, lastName } = this.shippingModel();
    return `${firstName} ${lastName}`;
  }

  get address(): string {
    return this.shippingModel().address;
  }

  get comment(): string {
    return this.shippingModel().comment;
  }

  add(id: string): void {
    this.cartService.addItem(id);
  }

  remove(id: string): void {
    this.cartService.removeItem(id);
  }
}
