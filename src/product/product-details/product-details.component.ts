import {
  Component,
  computed,
  inject,
  input,
  Input,
  signal,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
export interface Product {
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
  private readonly route = inject(Router);
  @Input() product: Product | undefined;
  action = input<string>();
  id = input<string>();
  ngOnInit() {
    // this.activatedRoute.data.subscribe((data) => {
    //   this.productDetails.set(data['product']);
    // });
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
