import { Injectable } from '@angular/core';
import {ApiService} from '../../services/API/api.service';
import {Condition} from './condition';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private static conditin: Condition;
  constructor(private apiService: ApiService) {

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
}
