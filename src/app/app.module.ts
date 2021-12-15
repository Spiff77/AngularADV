import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { B1Component } from './b1/b1.component';
import { B2Component } from './b2/b2.component';

@NgModule({
  declarations: [
    AppComponent,
    AComponent,
    BComponent,
    B1Component,
    B2Component,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
