import { of } from 'rxjs';

import { BasketItem } from '../../basket/basket.types';
import { Product } from '../../product/product.types';

export const ApiServiceMock = {
  getProducts: jasmine.createSpy('getProducts').and.returnValue(of([] as Product[])),

  getProduct: jasmine
    .createSpy('getProduct')
    .and.returnValue(
      of({ id: 'id', title: 'title', description: 'description', photo: 'photo', price: 10, stock: 2 } as Product)
    ),

  getBasket: jasmine.createSpy('getBasket').and.returnValue(of([] as BasketItem[])),

  addToBasket: jasmine
    .createSpy('addToBasket')
    .and.returnValue(of({ id: 'id', title: 'title', price: 10 } as BasketItem)),

  checkoutBasket: jasmine.createSpy('checkoutBasket').and.returnValue(of(of({ orderNumber: 1 }))),
};
