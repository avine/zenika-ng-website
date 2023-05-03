import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductComponent } from './product.component';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    component.product = { id: 'id', title: 'title', description: 'description', photo: 'photo', price: 10, stock: 2 };

    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
