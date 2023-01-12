import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { selectCoffees } from '../store/products.selectors';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit, OnDestroy {
  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store
      .pipe(select(selectCoffees))
      .subscribe((product) => console.log(product));
  }

  ngOnDestroy() {}
}
