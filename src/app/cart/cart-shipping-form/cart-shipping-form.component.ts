import { Component, input, output } from '@angular/core';
import { FieldTree, FormField } from '@angular/forms/signals';

import { MatInput } from '@angular/material/input';
import { MatError, MatFormField } from '@angular/material/form-field';

export interface ShippingModel {
  firstName: string;
  lastName: string;
  address: string;
  comment: string;
}

export type ShippingForm = FieldTree<ShippingModel>;

@Component({
  selector: 'app-cart-shipping-form',
  templateUrl: './cart-shipping-form.component.html',
  styleUrls: ['./cart-shipping-form.component.scss'],
  imports: [FormField, MatFormField, MatInput, MatError],
})
export class CartShippingFormComponent {
  shippingInfo = input.required<ShippingForm>();

  nextStep = output();

  onSubmit(event: Event): void {
    event.preventDefault();

    if (this.shippingInfo()().valid()) {
      this.nextStep.emit();
    }
  }
}
