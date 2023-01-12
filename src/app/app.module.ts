import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RouterModule, Routes } from '@angular/router';
import { productModule } from './product/product.module';

/**
 * Routes
 */
const routes: Routes = [
  {
    path: 'product',
    loadChildren: () =>
      import('./product/product.module').then((m) => m.productModule),
  },
  {
    path: '**',
    redirectTo: 'product',
  },
];
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
