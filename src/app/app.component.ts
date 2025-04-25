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
  products: any[] = [];
  constructor(private productService: IProductService) {
    this.products = productService.getProducts();
  }
  user: UserLogin = {
    email: '',
    age: new Date(),
    address: {
      city: 'New York',
      state: 'NY',
    },
  };

  onSubmit(ngForm: NgForm, event: any) {
    console.log('Form submitted', this.user);
    console.log('Form submitted', ngForm.value);
  }
}
