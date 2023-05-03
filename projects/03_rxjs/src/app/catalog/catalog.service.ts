import { BehaviorSubject, Observable, tap } from 'rxjs';

import { inject, Injectable } from '@angular/core';

import { ApiService } from '../shared/services/api.service';
import { Product } from './product/product.types';

@Injectable({
  providedIn: 'root',
})
export class CatalogService {
  #products$ = new BehaviorSubject<Product[]>([]);

  products$ = this.#products$.asObservable();

  get isStockEmpty(): boolean {
    return this.#products$.value.every(({ stock }) => stock === 0);
  }

  protected apiService = inject(ApiService);

  fetch(): Observable<Product[]> {
    return this.apiService.getProducts().pipe(tap((products) => this.#products$.next(products)));
  }

  decreaseStock(productId: string): void {
    this.#products$.next(
      this.#products$.value.map((product) => {
        if (product.id === productId) {
          return { ...product, stock: product.stock - 1 };
        }
        return product;
      })
    );
  }

  isAvailable(product: Product): boolean {
    return product.stock !== 0;
  }
}
