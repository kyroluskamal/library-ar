import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from '../product/product-list/product-list.component';
import { ProductDetailsComponent } from '../product/product-details/product-details.component';
// '/'+'product'+''
const routes: Routes = [
  {
    path: 'product',
    loadChildren: () =>
      import('../product/product.module').then((m) => m.ProductModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { bindToComponentInputs: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
