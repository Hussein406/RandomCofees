import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Product } from './productModel';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private coffeeurl =
    'https://random-data-api.com/api/coffee/random_coffee?size=50';
  productService: Product[] = [];

  constructor(private http: HttpClient) {}

  fetchCoffee() {
    return this.http.get<Product[]>(this.coffeeurl).pipe(
      catchError((error) => {
        return throwError(error);
      })
    );
  }
}
