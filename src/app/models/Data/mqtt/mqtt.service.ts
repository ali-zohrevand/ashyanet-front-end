import { Injectable } from '@angular/core';
import {ApiService} from '../../../services/API/api.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MqttService {

  constructor(private ApiServices: ApiService) { }
  PostGetDataOfSpecificTopicObservable(body: object): Observable<object> {
    return this.ApiServices.postApi('data', body);
  }
  getPublishTopicObservable(): Observable<object> {
    return this.ApiServices.getApi('mqtt-pub');
  }
  getSubscribeTopicObservable(): Observable<object> {
    return this.ApiServices.getApi('mqtt-sub');
  }
  getMqttInfo(): Observable<object> {
    return this.ApiServices.getApi('data');
  }
}
