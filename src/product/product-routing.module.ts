import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
  UrlMatcher,
  UrlMatchResult,
} from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductNotFoundComponent } from './product-not-found/product-not-found.component';
const productIdMatcher: UrlMatcher = (url): UrlMatchResult | null => {
  console.log(url);
  if (url.length === 1 && /^[A-Za-z]\d{4}[A-Za-z]$/.test(url[0].path)) {
    return {
      consumed: url,
      posParams: {
        id: url[0],
      },
    };
  }
  return null;
};

const routes: Routes = [
  {
    path: '',
    component: ProductListComponent,
  },
  {
    component: ProductDetailsComponent,
    matcher: productIdMatcher,
    resolve
  },
  {
    path: '**',
    component: ProductNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
