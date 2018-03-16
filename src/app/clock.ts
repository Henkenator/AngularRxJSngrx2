/**
 * Created by Henke on 2018-03-16.
 */
import {Component, Input} from '@angular/core';

@Component({
  selector: 'clock',
  template: `<h3>{{time | date:'medium'}}</h3>`
})
export class Clock{
  @Input('time') time;
}
