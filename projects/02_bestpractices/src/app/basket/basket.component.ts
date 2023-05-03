import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

import { Customer } from '../customer/customer.types';
import { BasketService } from './basket.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
})
export class BasketComponent {
  protected customer: Customer = { name: '', address: '', creditCard: '' };

  protected basketService = inject(BasketService);

  private router = inject(Router);

  protected checkout(event: Event): void {
    event.stopPropagation();
    event.preventDefault();

    this.basketService.checkout(this.customer).subscribe(() => this.router.navigate(['']));
  }
}
