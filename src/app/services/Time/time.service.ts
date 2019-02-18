import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  constructor() { }
   whatTimeIsIt(time: number) {
    const dateTime = moment.unix(time);
    return dateTime;
  }
}
