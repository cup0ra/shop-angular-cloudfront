import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EMPTY, of } from 'rxjs';
import { provideRouter } from '@angular/router';

import { ManageProductsComponent } from './manage-products.component';
import { ManageProductsService } from './manage-products.service';
import { ProductsService } from '../../products/products.service';

describe('ProductsComponent', () => {
  let component: ManageProductsComponent;
  let fixture: ComponentFixture<ManageProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageProductsComponent],
      providers: [
        provideRouter([]),
        {
          provide: ManageProductsService,
          useValue: {
            uploadProductsCSV: () => EMPTY,
          },
        },
        {
          provide: ProductsService,
          useValue: {
            getProducts: () => of([]),
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
