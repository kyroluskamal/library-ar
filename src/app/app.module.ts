import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { MinAge18Directive } from './min-age18.directive';
import { EmailAsyncDirective } from './email-async.directive';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    JsonPipe,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    MinAge18Directive,
    EmailAsyncDirective,
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
