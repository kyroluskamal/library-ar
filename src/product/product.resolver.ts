import { RedirectCommand, ResolveFn, Router } from '@angular/router';
import { Product } from './product-details/product-details.component';
import { inject } from '@angular/core';
import { ProductService } from './product.service';
import { catchError, map, of } from 'rxjs';

export const productResolver: ResolveFn<Product | undefined> = (route) => {
  const productService = inject(ProductService);
  const router = inject(Router);
  const id = route.paramMap.get('id') || undefined;
  const redirect = new RedirectCommand(router.parseUrl('/product/not-found'));
  return productService.getProductById$(id).pipe(
    map((product) => {
      if (product) return product;
      return redirect;
    }),
    catchError(() => {
      return of(redirect);
    })
  );
};
