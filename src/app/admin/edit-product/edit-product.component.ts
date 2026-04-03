import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
  input,
  OnInit,
  signal,
} from '@angular/core';
import {
  FieldTree,
  form,
  FormField,
  min,
  required,
} from '@angular/forms/signals';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

import { filter } from 'rxjs';
import { finalize } from 'rxjs/operators';

import { ProductsService } from '../../products/products.service';
import { NotificationService } from '../../core/notification.service';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { MatButton } from '@angular/material/button';
import { MatInput } from '@angular/material/input';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardTitle,
} from '@angular/material/card';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

interface EditProductModel {
  count: number | null;
  description: string;
  price: number | null;
  title: string;
}

type EditProductForm = FieldTree<EditProductModel>;

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatCard,
    MatCardTitle,
    MatCardContent,
    FormField,
    MatFormField,
    MatLabel,
    MatInput,
    MatError,
    MatCardActions,
    MatButton,
    RouterLink,
    MatProgressSpinner,
  ],
})
export class EditProductComponent implements OnInit {
  #destroyRef = inject(DestroyRef);
  #activatedRoute = inject(ActivatedRoute);
  #notificationService = inject(NotificationService);
  #productsService = inject(ProductsService);
  #router = inject(Router);

  productId = input<string>();

  model = signal<EditProductModel>({
    count: null,
    description: '',
    price: null,
    title: '',
  });

  form: EditProductForm = form(this.model, (path) => {
    required(path.title, { message: 'Product title is required' });
    required(path.description, {
      message: 'Product description is required',
    });
    required(path.price, { message: 'Product price is required' });
    required(path.count, { message: 'Product count is required' });
    min(path.price, 0);
    min(path.count, 0);
  });

  requestInProgress = false;

  loaded = signal(false);

  ngOnInit(): void {
    const productId = this.productId();

    if (!productId) {
      this.loaded.set(true);
      return;
    }

    this.#productsService
      .getProductById(productId)
      .pipe(
        finalize(() => this.loaded.set(true)),
        filter(Boolean),
        takeUntilDestroyed(this.#destroyRef),
      )
      .subscribe((product) => {
        this.model.set({
          count: product.count,
          description: product.description,
          price: product.price,
          title: product.title,
        });
      });
  }

  editProduct(): void {
    if (this.form().invalid()) {
      return;
    }

    const { count, description, price, title } = this.model();

    if (count === null || price === null) {
      return;
    }

    const product = {
      count,
      description,
      price,
      title,
    };

    const productId = this.productId();

    const observable = productId
      ? this.#productsService.editProduct(productId, product)
      : this.#productsService.createNewProduct(product);

    this.requestInProgress = true;

    observable.subscribe({
      next: () =>
        this.#router.navigate(['../'], { relativeTo: this.#activatedRoute }),
      error: (error: unknown) => {
        console.warn(error);
        this.requestInProgress = false;
        this.#notificationService.showError(
          `Failed to ${this.productId() ? 'edit' : 'create'} product`,
        );
      },
    });
  }
}
