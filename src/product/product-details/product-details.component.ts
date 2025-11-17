import {
  Component,
  computed,
  inject,
  input,
  Input,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
interface Product {
  id: string;
  name: string;
  description: string;
}

@Component({
  selector: 'app-product-details',
  standalone: false,

  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
})
export class ProductDetailsComponent {
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly route = inject(Router);
  products = [
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
  productDetails = computed<Product | undefined>(() => {
    return this.loadPorductDetails();
  });
  action = input<string>();
  id = input<string>();
  ngOnInit() {
    console.log(this.action());
  }

  loadPorductDetails() {
    return this.products.find((product) => product.id == this.id());
  }

  onBack() {
    window.history.back();
  }

  onNext() {
    const nextProductId = Number(this.id()) + 1;
    this.route.navigate(['product', nextProductId], {
      queryParams: { action: 'view', id: nextProductId },
      fragment: 'top',
    });
  }
}
