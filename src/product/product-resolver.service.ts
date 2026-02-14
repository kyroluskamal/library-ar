import { inject, Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  MaybeAsync,
  RedirectCommand,
  Resolve,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Product } from './product-details/product-details.component';
import { ProductService } from './product.service';
import { catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductResolverService implements Resolve<Product | undefined> {
  private readonly productService = inject(ProductService);
  private readonly router = inject(Router);
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): MaybeAsync<Product | RedirectCommand | undefined> {
    const id = route.paramMap.get('id') || undefined;
    const redirect = new RedirectCommand(
      this.router.parseUrl('/product/not-found')
    );
    return this.productService.getProductById$(id).pipe(
      map((product) => {
        if (product) return product;
        return redirect;
      }),
      catchError(() => {
        return of(redirect);
      })
    );
  }
}
