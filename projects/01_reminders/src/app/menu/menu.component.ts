import { Component } from '@angular/core';

import { Product } from '../product/product.types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const globalBasket: Product[] = ((window as any).basket ??= []);

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent {
  protected get basketItemsCounter() {
    return globalBasket.length;
  }
}
