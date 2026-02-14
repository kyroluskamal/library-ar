import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product-details/product-details.component';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  product = [
    {
      id: 'a1235b',
      name: 'Laptop Model X',
      description: 'A fast and light laptop.',
    },
    {
      id: 'a1275b',
      name: 'Large Monitor',
      description: 'A 27-inch IPS monitor.',
    },
    {
      id: 'a1735b',
      name: 'Wireless Mouse',
      description: 'An ergonomic wireless mouse.',
    },
  ];
  getProducts$() {
    return new Observable<Product[]>((observer) => {
      setTimeout(() => {
        observer.next(this.product);
        observer.complete();
      }, 500);
    });
  }
  getProductsPromise(): Promise<Product[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.product);
      }, 500);
    });
  }
  getProductById$(id: string | undefined): Observable<Product | undefined> {
    return new Observable<Product | undefined>((observer) => {
      setTimeout(() => {
        observer.next(this.product.find((product) => product.id === id));
        observer.complete();
      }, 2000);
    });
  }

  getProductByIdPromise(id: string | undefined): Promise<Product | undefined> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.product.find((product) => product.id === id));
      }, 2000);
    });
  }
}
