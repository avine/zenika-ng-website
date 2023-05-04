import { AsyncPipe, CurrencyPipe, NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService } from '../alert/alert.service';
import { Customer } from '../customer/customer.types';
import { BasketService } from './basket.service';

@Component({
  selector: 'app-basket',
  standalone: true,
  imports: [AsyncPipe, CurrencyPipe, NgFor, NgIf],
  templateUrl: './basket.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasketComponent {
  protected customer: Customer = { name: '', address: '', creditCard: '' };

  protected basketService = inject(BasketService);

  #alertService = inject(AlertService);

  #router = inject(Router);

  protected checkout(event: Event): void {
    event.stopPropagation();
    event.preventDefault();

    this.basketService.checkout(this.customer).subscribe({
      next: ({ orderNumber }) => {
        this.#alertService.addSuccess(`Merci pour votre achat. (Réf. ${orderNumber})`);
        this.#router.navigate(['']);
      },
      error: () => {
        this.#alertService.addDanger("Désolé, une erreur s'est produite.");
      },
    });
  }
}
