import { inject } from '@angular/core';

import { BasketService } from './basket.service';

export const basketResolver = () => inject(BasketService).fetch();
