import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';

export const productRoutes: Routes = [
    {
        path: "",
        component: ProductListComponent,
    }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(productRoutes)],
  declarations: [ProductListComponent, ProductDetailsComponent],
  exports: [ProductListComponent, ProductDetailsComponent],
  providers: [],
})
export class productModule {
  constructor() {}
}
