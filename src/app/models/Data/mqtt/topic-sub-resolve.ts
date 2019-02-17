import {Injectable, OnInit} from "@angular/core";
import {ActivatedRoute, ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {MqttService} from "./mqtt.service";
import {MqttMessages} from "./mqtt-messages";
import {MqttInfo} from "./mqtt-info";
import {MqttDataRequest} from "./mqtt-data-request";


@Injectable()

export class TopicSubResolve implements OnInit, Resolve<Observable<object>> {
  constructor(private mqttService: MqttService,private router: ActivatedRoute ) {
  }
  messages :Observable<object>;
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<object> {
    const topicBas64 = this.router.snapshot.params['topic'];
    const topicPath = atob(topicBas64);
    let mqttDataRequest: MqttDataRequest;
    mqttDataRequest.topic = topicPath;
    this.messages= this.mqttService.PostGetDataOfSpecificTopicObservable(mqttDataRequest);
    return this.messages;
  }

  ngOnInit(): void {
  }
}
