import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: false,

  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent {
  // constructor(private readonly router: Router) {}
  private readonly router = inject(Router);
  private readonly activatedRroute = inject(ActivatedRoute);
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
  urlTree = this.router.createUrlTree(['product']);
  goToProductDetails(productId: number) {
    this.router.navigate([productId], {
      relativeTo: this.activatedRroute,
      queryParams: { action: 'view', id: productId },
      fragment: 'top',
    });
    this.router.navigateByUrl(
      `product/${productId}?action=view&id=${productId}#top`
    );
  }
}
