import {Injectable, OnInit} from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {MqttService} from './mqtt.service';
import {MqttMessages} from './mqtt-messages';
import {MqttInfo} from './mqtt-info';
import {MqttDataRequest} from './mqtt-data-request';


@Injectable()

export class TopicSubResolve implements OnInit, Resolve<Observable<object>> {
  constructor(private mqttService: MqttService) {
  }
  messages: Observable<object>;
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<object> {
    const topicBas64 = route.params['topic'];
    console.log(topicBas64);
    if (topicBas64 !== null) {
      let topicPath: string = '';
      topicPath = atob(topicBas64);
      console.log(topicPath);
      let mqttDataRequest: MqttDataRequest;
      mqttDataRequest = new MqttDataRequest();
      mqttDataRequest.topic = topicPath;
      this.messages = this.mqttService.PostGetDataOfSpecificTopicObservable(mqttDataRequest);
    }
    return this.messages;
  }

  ngOnInit(): void {
  }
}
