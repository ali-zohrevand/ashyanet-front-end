import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../../services/API/api.service';
import {Location} from '../../../models/Locations/location';
import {Device} from '../../../models/device/device';
import {DevicesService} from '../../../models/device/devices.service';
import {LocationsService} from '../../../models/Locations/locations.service';
import {el} from '@angular/platform-browser/testing/src/browser_util';
import {MqttInfo} from '../../../models/Data/mqtt/mqtt-info';
import {MqttService} from '../../../models/Data/mqtt/mqtt.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  deviceNumber: number;
  LocaionNumber: number;
  MqttInfo: MqttInfo;
  constructor(private deviceApi: DevicesService, private LocationService: LocationsService, private mqttServices: MqttService) {
    this.deviceNumber = 0;
    this.LocaionNumber = 0;
  }

  ngOnInit() {
    this.mqttServices.getMqttInfo().subscribe((info: MqttInfo) => {
    this.MqttInfo = info;
    console.log(info);
    }, (error: Response) => {

    });
    this.deviceApi.getDeviceObservable().subscribe((d: Device[]) => {
      if (d === null) {
        this.deviceNumber = 0;

      } else {
        this.deviceNumber = d.length;

      }
    });
    this.LocationService.getLocationObservable().subscribe((l: Location[]) => {
      if (l === null) {
        this.LocaionNumber = 0;

      } else {
        this.LocaionNumber = l.length;

      }
    });
  }

}
