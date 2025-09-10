import { inject, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from '../product/product-list/product-list.component';
import { ProductDetailsComponent } from '../product/product-details/product-details.component';
import { HomeComponent } from '../home/home.component';
import { NewHomeComponent } from '../new-home/new-home.component';
import { RedirectComponent } from '../redirect/redirect.component';
import { FeatureFlagService } from '../services/feature.service';
import { map } from 'rxjs';
// '/'+'product'+''
const routes: Routes = [
  {
    path: '',
    redirectTo: () => {
      const featureService = inject(FeatureFlagService);

      return featureService.getFlags().newHome ? 'new-home' : 'home';
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
      enableTracing: true,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
