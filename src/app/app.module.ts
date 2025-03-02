import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@NgModule({
  declarations: [AppComponent],
  imports: [AppRoutingModule, JsonPipe, BrowserModule, FormsModule],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
