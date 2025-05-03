import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const components = [ProductListComponent, ProductDetailsComponent];

@NgModule({
  declarations: components,
  imports: [CommonModule, ProductRoutingModule],
  exports: components,
})
export class ProductModule {}
