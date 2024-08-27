import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [AppRoutingModule, BrowserModule, FormsModule],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
