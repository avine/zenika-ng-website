import { Component, Inject } from '@angular/core';

import { BasketItem } from '../basket/basket.types';
import { Product } from '../product/product.types';
import { ApiService } from '../shared/services/api.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
})
export class CatalogComponent {
  protected products?: Product[];

  protected basket?: BasketItem[];

  constructor(@Inject('WELCOME_MSG') protected welcomeMsg: string, private apiService: ApiService) {
    this.apiService.getProducts().subscribe((products) => (this.products = products));
    this.apiService.getBasket().subscribe((basket) => (this.basket = basket));
  }

  protected get basketTotal(): number {
    return this.basket?.reduce((total: number, { price }) => total + price, 0) ?? 0;
  }

  protected addToBasket(product: Product): void {
    this.apiService.addToBasket(product.id).subscribe(() => {
      this.basket?.push(product);
      this.decreaseStock(product);
    });
  }

  private decreaseStock(product: Product): void {
    product.stock -= 1;
  }

  protected isAvailable(product: Product): boolean {
    return product.stock !== 0;
  }

  protected get isStockEmpty(): boolean {
    return this.products?.every(({ stock }) => stock === 0) ?? false;
  }
}
