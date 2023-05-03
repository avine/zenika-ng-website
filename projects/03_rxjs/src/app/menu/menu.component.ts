import { Component, inject } from '@angular/core';

import { BasketService } from '../basket/basket.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent {
  protected basketService = inject(BasketService);
}
