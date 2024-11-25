import { Component, inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  styles: ``,
})
export class AppComponent {
  title = 'Coding Bible library';
  fb = inject(FormBuilder);
  form = this.fb.group({
    name: [''],
    email: [''],
  });
  ngOnInit() {
    const invoice = {
      name: 'John Doe',
      email: 'Johndoe@gmail.com',
      products: [
        { productName: 'Product 1', price: 100, quantity: 1 },
        { productName: 'Product 2', price: 200, quantity: 2 },
        { productName: 'Product 3', price: 300, quantity: 3 },
      ],
    };
  }
  submit() {
    if (this.form.invalid) return;
    console.log(this.form.value);
  }
}
