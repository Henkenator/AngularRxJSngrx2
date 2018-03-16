import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {AppStoreModule} from '../store';
import {Clock} from './clock';


@NgModule({
  declarations: [
    AppComponent,
    Clock
  ],
  imports: [
    BrowserModule, AppStoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
