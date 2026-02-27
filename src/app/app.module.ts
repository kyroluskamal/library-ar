import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { MinAge18Directive } from './min-age18.directive';
import { EmailAsyncDirective } from './email-async.directive';
import { ProductModule } from '../product/product.module';
import { HomeComponent } from '../home/home.component';
import { NewHomeComponent } from '../new-home/new-home.component';
import { RedirectComponent } from '../redirect/redirect.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { AdminDashComponent } from '../admin-dash/admin-dash.component';
import { AccessDeniedComponent } from '../access-denied/access-denied.component';
import { LoginComponent } from '../login/login.component';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewHomeComponent,
    RedirectComponent,
    NotFoundComponent,
    AdminDashComponent,
    AccessDeniedComponent,
    LoginComponent,
  ],
  imports: [
    AppRoutingModule,
    JsonPipe,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    MinAge18Directive,
    EmailAsyncDirective,
    RouterLink,
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
