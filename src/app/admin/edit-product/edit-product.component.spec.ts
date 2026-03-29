import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { of } from 'rxjs';

import { EditProductComponent } from './edit-product.component';
import { NotificationService } from '../../core/notification.service';
import { ProductsService } from '../../products/products.service';

describe('EditProductComponent', () => {
  let component: EditProductComponent;
  let fixture: ComponentFixture<EditProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditProductComponent],
      providers: [
        provideRouter([]),
        {
          provide: NotificationService,
          useValue: {
            showError: () => {},
          },
        },
        {
          provide: ProductsService,
          useValue: {
            createNewProduct: () => of(null),
            editProduct: () => of(null),
            getProductById: () => of(null),
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
