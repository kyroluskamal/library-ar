import { Component, ViewChild } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { CustomValidators } from '../CustomValidation/customvalidtors';
import { IProductService, ProductService } from '../services/ProductService';

interface UserLogin {
  email?: string;
  age: Date;
  address: {
    city: string;
    state: string;
  };
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  styles: ``,
  standalone: false,
})
export class AppComponent {
  title = 'Coding Bible library';
  // products = [
  //   { id: 1, name: 'Laptop Model X', description: 'A fast and light laptop.' },
  //   { id: 2, name: 'Large Monitor', description: 'A 27-inch IPS monitor.' },
  //   {
  //     id: 3,
  //     name: 'Wireless Mouse',
  //     description: 'An ergonomic wireless mouse.',
  //   },
  // ];
}
