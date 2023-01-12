import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductState } from '../reducers/product.reducers';
import * as products from '../reducers/product.reducers';

export const selectProductState =
  createFeatureSelector<ProductState>('Products');

export const selectAllProducts = createSelector(
  selectProductState,
  products.selectAll
);

export const selectCoffees = createSelector(selectAllProducts, (products) =>
  products.filter((product) => product)
);
