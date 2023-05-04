import { zip } from 'rxjs';

import { inject } from '@angular/core';

import { BasketService } from '../basket/basket.service';
import { CatalogService } from './catalog.service';

export const catalogResolver = () => zip([inject(CatalogService).fetch(), inject(BasketService).fetch()]);
