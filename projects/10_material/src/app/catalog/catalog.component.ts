import { AsyncPipe, CurrencyPipe, NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

import { AlertService } from '../alert/alert.service';
import { WELCOME_MSG } from '../app.provider';
import { BasketService } from '../basket/basket.service';
import { CatalogService } from './catalog.service';
import { ProductComponent } from './product/product.component';
import { Product } from './product/product.types';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [AsyncPipe, CurrencyPipe, NgFor, NgIf, RouterLink, MatButtonModule, ProductComponent],
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
      error: () => this.#alertService.addDanger("😱 Désolé, une erreur s'est produite."),
    });
  }
}
