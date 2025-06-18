import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from '../product/product-list/product-list.component';
import { ProductDetailsComponent } from '../product/product-details/product-details.component';

const routes: Routes = [
  {
    path: 'product',
    component: ProductListComponent,
  },
  {
    path: 'product/:id',
    component: ProductDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { bindToComponentInputs: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
