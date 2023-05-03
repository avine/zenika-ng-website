import { of } from 'rxjs';

import { Product } from './product/product.types';

export const CatalogServiceMock = {
  products: [] as Product[],

  isStockEmpty: true,

  fetch: jasmine.createSpy('fetch').and.returnValue(of([] as Product[])),

  decreaseStock: jasmine.createSpy('decreaseStock'),

  isAvailable: jasmine.createSpy('isAvailable').and.returnValue(false),
};
