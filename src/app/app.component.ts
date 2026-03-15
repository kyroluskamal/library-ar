import { Component, ViewChild } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { CustomValidators } from '../CustomValidation/customvalidtors';
import { IProductService, ProductService } from '../services/ProductService';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
  Event as RouterEvent,
} from '@angular/router';
import { filter } from 'rxjs';

interface UserLogin {
  email?: string;
  age: Date;
  address: {
    city: string;
    state: string;
  };
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  styles: ``,
  standalone: false,
})
export class AppComponent {
  title = 'Coding Bible library';
  loading = false;
  constructor(private readonly router: Router) {
    this.router.events
      .pipe(
        filter(
          (e: RouterEvent) =>
            e instanceof NavigationStart ||
            e instanceof NavigationEnd ||
            e instanceof NavigationCancel ||
            e instanceof NavigationError,
        ),
      )
      .subscribe((e) => {
        if (e instanceof NavigationStart) {
          this.loading = true;
          console.log('LOADING = true');
        }

        if (
          e instanceof NavigationEnd ||
          e instanceof NavigationCancel ||
          e instanceof NavigationError
        ) {
          this.loading = false;
        }
        if (e instanceof NavigationStart) {
          console.log(`[Start  #${e.id}] url=${e.url}`);
        } else if (e instanceof NavigationCancel) {
          console.log(
            `[Cancel #${e.id}] url=${e.url} reason=${(e as any).reason}`,
          );
        } else if (e instanceof NavigationEnd) {
          console.log(
            `[End    #${e.id}] url=${e.url} after=${(e as any).urlAfterRedirects}`,
          );
        } else if (e instanceof NavigationError) {
          console.log(`[Error  #${e.id}] url=${e.url}`, (e as any).error);
        }
      });
  }
}
