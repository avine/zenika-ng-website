import { BehaviorSubject, map, Observable, tap } from 'rxjs';

import { inject, Injectable } from '@angular/core';

import { Customer } from '../customer/customer.types';
import { ApiService } from '../shared/services/api.service';
import { BasketItem } from './basket.types';

@Injectable({
  providedIn: 'root',
})
export class BasketService {
  #basket$ = new BehaviorSubject<BasketItem[]>([]);

  basket$ = this.#basket$.asObservable();

  total$: Observable<number> = this.#basket$.pipe(
    map((basket) => basket.reduce((total, { price }) => total + price, 0))
  );

  numberOfItems$: Observable<number> = this.#basket$.pipe(map(({ length }) => length));

  #apiService = inject(ApiService);

  fetch(): Observable<BasketItem[]> {
    return this.#apiService.getBasket().pipe(tap((basket) => this.#basket$.next(basket)));
  }

  addItem(productId: string): Observable<BasketItem> {
    return this.#apiService
      .addToBasket(productId)
      .pipe(tap((basketItem) => this.#basket$.next([...this.#basket$.value, basketItem])));
  }

  checkout(customer: Customer): Observable<{ orderNumber: number }> {
    return this.#apiService.checkoutBasket(customer).pipe(tap(() => this.#basket$.next([])));
  }
}
