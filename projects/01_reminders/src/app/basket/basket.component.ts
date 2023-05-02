import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Customer } from '../customer/customer.types';
import { Product } from '../product/product.types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const globalBasket: Product[] = ((window as any).basket ??= []);

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
})
export class BasketComponent {
  protected basket = globalBasket;

  protected customer: Customer = { name: '', address: '', creditCard: '' };

  constructor(private router: Router) {}

  protected get basketTotal(): number {
    return globalBasket.reduce((total: number, { price }: Product) => total + price, 0);
  }

  protected checkout(event: Event): void {
    event.stopPropagation();
    event.preventDefault();

    globalBasket.length = 0;
    this.router.navigate(['']);
  }
}
