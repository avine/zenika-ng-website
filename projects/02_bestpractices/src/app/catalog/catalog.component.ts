import { Component, inject, OnInit } from '@angular/core';

import { WELCOME_MSG } from '../app.token';
import { BasketService } from '../basket/basket.service';
import { CatalogService } from './catalog.service';
import { Product } from './product/product.types';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
})
export class CatalogComponent implements OnInit {
  protected welcomeMsg = inject(WELCOME_MSG);

  protected catalogService = inject(CatalogService);

  protected basketService = inject(BasketService);

  ngOnInit(): void {
    this.catalogService.fetch().subscribe();
    this.basketService.fetch().subscribe();
  }

  protected addToBasket(product: Product): void {
    this.basketService.addItem(product.id).subscribe(() => {
      this.catalogService.decreaseStock(product.id);
    });
  }
}
