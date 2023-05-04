import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { AlertService } from '../alert/alert.service';
import { WELCOME_MSG } from '../app.token';
import { BasketService } from '../basket/basket.service';
import { CatalogService } from './catalog.service';
import { Product } from './product/product.types';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CatalogComponent {
  protected welcomeMsg = inject(WELCOME_MSG);

  protected catalogService = inject(CatalogService);

  protected basketService = inject(BasketService);

  #alertService = inject(AlertService);

  protected addToBasket(product: Product): void {
    this.basketService.addItem(product.id).subscribe({
      next: () => this.catalogService.decreaseStock(product.id),
      error: () => this.#alertService.addDanger("Désolé, une erreur s'est produite."),
    });
  }
}
