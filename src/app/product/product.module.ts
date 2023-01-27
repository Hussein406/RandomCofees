import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductService } from './product.service';
import { productReducer } from './reducers/product.reducers';
import { ProductEffects } from './store/product.effects';
import { ProductResolver } from './store/product.resolver';

export const productRoutes: Routes = [
  {
    path: '',
    component: ProductListComponent,
    resolve: {
      product: ProductResolver,
    },
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(productRoutes),
    EffectsModule.forFeature([ProductEffects]),
    StoreModule.forFeature('Products', productReducer),
  ],
  declarations: [ProductListComponent],
  exports: [ProductListComponent],
  providers: [ProductResolver, ProductService],
})
export class productModule {
  constructor() {}
}
