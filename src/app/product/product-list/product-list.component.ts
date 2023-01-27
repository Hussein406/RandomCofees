import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/reducers';
import { Product } from '../productModel';
import { selectCoffees } from '../store/products.selectors';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
})
export class ProductListComponent implements OnInit, OnDestroy {
  coffees: Product[] = [];
  isloaded = false;

  private onSubscription!: Subscription; 

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.onSubscription =  this.store
      .pipe(select(selectCoffees))
      .subscribe((product) => {
        this.isloaded = true;
        this.coffees = product
      });
  }

  ngOnDestroy() {
    this.onSubscription.unsubscribe(); 
  }
}
