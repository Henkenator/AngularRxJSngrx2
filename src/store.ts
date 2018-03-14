/**
 * Created by Henke on 2018-03-14.
 */
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import {clock} from './reducers';

@NgModule({
  imports: [StoreModule.forRoot({ clock})]
})
export class AppStoreModule {
}

