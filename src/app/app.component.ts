import { Component } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/operator/scan';
import {select, Store} from '@ngrx/store';
import {ADVANCE, HOUR, RECALL, SECOND} from '../reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  person$ = new Subject()
    .map((value) => ({type: ADVANCE, payload: value}));

  recall$ = new Subject();

  click$ = new Subject()
    .map(value => ({type: HOUR, payload: parseInt(value)}));

  seconds$ = Observable
    .interval(1000)
    .mapTo({type: SECOND, payload: 1});

  time;
  people;

  constructor(store: Store<any>) {
    this.time = store.pipe(select('clock'));
    this.people = store.pipe(select('people'));

    Observable.merge(
      this.click$,
      this.seconds$,
      this.person$,
      this.recall$
        .withLatestFrom(this.time, (_, y) => y)
        .map((time) => ({type: RECALL, payload: time}))
    ).subscribe(store.dispatch.bind(store));

  }
}
