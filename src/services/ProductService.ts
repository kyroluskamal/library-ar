import { Injectable } from '@angular/core';
export interface IProductService {
  getProducts(): any[];
  getProductById(id: number): any;
}
@Injectable({
  providedIn: 'root',
})
export class ProductService implements IProductService {
  private readonly products = [
    { id: 1, name: 'Laptop Pro', price: 1200 },
    { id: 2, name: 'Keyboard MX', price: 150 },
    { id: 3, name: 'Webcam HD', price: 80 },
  ];

  constructor() {
    // Log to track instance creation
    console.log(
      `Creating a new instance of ProductService! Timestamp: ${Date.now()}`
    );
  }

  getProducts() {
    console.log('ProductService: Fetching all products...');
    return this.products;
  }

  getProductById(id: number) {
    console.log(`ProductService: Fetching product with id: ${id}`);
    return this.products.find((p) => p.id === id);
  }
}

export class MocProductSerice implements IProductService {
  private readonly products = [
    { id: 101, name: 'Mock Laptop', price: 1000 },
    { id: 102, name: 'Mock Keyboard', price: 100 },
    { id: 103, name: 'Mock Webcam', price: 70 },
  ];

  getProducts(): any[] {
    console.log('MocProductSerice: Returning mock products.');
    return this.products;
  }

  getProductById(id: number): any {
    console.log(`MocProductSerice: Fetching mock product with id: ${id}`);
    return this.products.find((product) => product.id === id);
  }
}
