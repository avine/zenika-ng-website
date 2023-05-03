import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Customer } from '../customer/customer.types';
import { BasketService } from './basket.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
})
export class BasketComponent implements OnInit {
  protected customer: Customer = { name: '', address: '', creditCard: '' };

  protected basketService = inject(BasketService);

  private router = inject(Router);

  ngOnInit(): void {
    this.basketService.fetch().subscribe();
  }

  protected checkout(event: Event): void {
    event.stopPropagation();
    event.preventDefault();

    this.basketService.checkout(this.customer).subscribe(() => this.router.navigate(['']));
  }
}
