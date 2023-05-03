import { Observable, tap } from 'rxjs';

import { inject, Injectable } from '@angular/core';

import { Customer } from '../customer/customer.types';
import { ApiService } from '../shared/services/api.service';
import { BasketItem } from './basket.types';

@Injectable({
  providedIn: 'root',
})
export class BasketService {
  basket: BasketItem[] = [];

  get total(): number {
    return this.basket.reduce((total, { price }) => total + price, 0);
  }

  get numberOfItems(): number {
    return this.basket.length;
  }

  private apiService = inject(ApiService);

  fetch(): Observable<BasketItem[]> {
    return this.apiService.getBasket().pipe(tap((basket) => (this.basket = basket)));
  }

  addItem(productId: string): Observable<BasketItem> {
    return this.apiService.addToBasket(productId).pipe(tap((basketItem) => this.basket.push(basketItem)));
  }

  checkout(customer: Customer): Observable<{ orderNumber: number }> {
    return this.apiService.checkoutBasket(customer).pipe(tap(() => (this.basket = [])));
  }
}
