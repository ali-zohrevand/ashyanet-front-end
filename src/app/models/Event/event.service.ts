import { Injectable } from '@angular/core';
import {ApiService} from '../../services/API/api.service';
import {Condition} from './condition';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private conditin: Condition;
  constructor(private apiService: ApiService) {
    this.conditin = new Condition();
  }
  getCondition() {
    return this.conditin;
  }
  setCondition(c: Condition) {
    this.conditin = c;
  }
  clearCondition() {
    this.conditin = null;
    this.conditin = new Condition();
  }
}
