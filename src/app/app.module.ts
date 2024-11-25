import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  BrowserModule,
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [AppRoutingModule, BrowserModule, ReactiveFormsModule],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
