import { Injectable } from '@angular/core';
import {ApiService} from '../../services/API/api.service';
import {Condition} from './condition';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private static conditin: Condition;
  constructor(private ApiServices: ApiService) {

  }
  getCondition() {
    if (!EventService.conditin) {
      EventService.conditin = new Condition();
      // ... any one time initialization goes here ...
    }
    return EventService.conditin ;
  }

  setCondition(c: Condition) {
    EventService.conditin = c;
  }
  clearCondition() {
    EventService.conditin  = null;
    EventService.conditin  = this.getCondition();
  }
  PostEventObservable(body: object): Observable<object> {
    return this.ApiServices.postApi('event', body);
  }
}
