import { Component } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/scan';
import {select, Store} from '@ngrx/store';
import {HOUR, SECOND} from '../reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  click$ = new Subject();

  clock;

  constructor(store: Store<any>) {
    this.clock = store.pipe(select('clock'));

    Observable.merge(
      this.click$.mapTo(HOUR),
      Observable.interval(1000).mapTo(SECOND)
    ).subscribe((type) => {
      store.dispatch({type});
    });

  }


  /*
   .scan((acc: Date, curr) => {
   const date = new Date(acc.getTime());

   if (curr === 'second') {
   date.setSeconds(date.getSeconds() + 1);
   }

   if (curr === 'hour') {
   date.setHours(date.getHours() + 1);
   }

   return date;
   }, new Date());
   */

}
