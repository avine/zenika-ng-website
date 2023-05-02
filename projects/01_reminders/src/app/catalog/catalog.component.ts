import { Component, Inject } from '@angular/core';

import { getProductsFromNetwork } from '../fake-server';
import { Product } from '../product/product.types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const globalBasket: Product[] = ((window as any).basket ??= []);

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
})
export class CatalogComponent {
  protected products?: Product[];

  constructor(@Inject('WELCOME_MSG') protected welcomeMsg: string) {
    getProductsFromNetwork().then((products) => {
      this.products = products;
    });
  }

  protected get basketTotal(): number {
    return globalBasket.reduce((total: number, { price }: Product) => total + price, 0);
  }

  protected addToBasket(product: Product): void {
    globalBasket.push(product);
    product.stock -= 1;
  }

  protected get isStockEmpty(): boolean {
    return this.products?.every(({ stock }) => stock === 0) ?? false;
  }

  protected isAvailable(product: Product): boolean {
    return product.stock !== 0;
  }
}
