import { inject, NgModule } from '@angular/core';
import { ActivatedRoute, Router, RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from '../product/product-list/product-list.component';
import { ProductDetailsComponent } from '../product/product-details/product-details.component';
import { HomeComponent } from '../home/home.component';
import { NewHomeComponent } from '../new-home/new-home.component';
import { FeatureFlagService } from '../services/feature.service';
// '/'+'product'+''
const routes: Routes = [
  {
    path: '',
    redirectTo: (redirectData) => {
      const router = inject(Router);
      const featureService = inject(FeatureFlagService);
      const activatedRoute = inject(ActivatedRoute);

      const target = featureService.getFlags().newHome
        ? ['new-home']
        : ['home'];
      return router.createUrlTree(target, {
        relativeTo: activatedRoute,
        queryParams: {
          dddddd: 2,
          page: 222,
        },
        preserveFragment: true,
        queryParamsHandling: 'merge',
      });
    },
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'new-home',
    component: NewHomeComponent,
  },
  {
    path: 'product',
    loadChildren: () =>
      import('../product/product.module').then((m) => m.ProductModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      bindToComponentInputs: true,
      enableTracing: false,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
