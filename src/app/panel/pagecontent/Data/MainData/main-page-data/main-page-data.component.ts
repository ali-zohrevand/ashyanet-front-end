import { Component, OnInit } from '@angular/core';
import {MqttInfo} from '../../../../../models/Data/mqtt/mqtt-info';
import {MqttService} from '../../../../../models/Data/mqtt/mqtt.service';

@Component({
  selector: 'app-main-page-data',
  templateUrl: './main-page-data.component.html',
  styleUrls: ['./main-page-data.component.css']
})
export class MainPageDataComponent implements OnInit {
  MqttInfo: MqttInfo;

  constructor(private mqttServices: MqttService) { }

  ngOnInit() {
    this.mqttServices.getMqttInfo().subscribe((info: MqttInfo) => {
      this.MqttInfo = info;
    }, (error: Response) => {

    });
  }

}
