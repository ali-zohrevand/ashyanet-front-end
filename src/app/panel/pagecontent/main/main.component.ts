import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../../services/API/api.service';
import {Location} from '../../../models/Locations/location';
import {Device} from '../../../models/device/device';
import {DevicesService} from '../../../models/device/devices.service';
import {LocationsService} from '../../../models/Locations/locations.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  deviceNumber: number;
  LocaionNumber: number;

  constructor(private deviceApi: DevicesService, private LocationService: LocationsService) {
    this.deviceNumber = 0;
    this.LocaionNumber = 0;
  }

  ngOnInit() {

    this.deviceApi.getDeviceObservable().subscribe((d: Device[]) => {
      this.deviceNumber = d.length;
    });
    this.LocationService.getLocationObservable().subscribe((l: Location[]) => {
      this.LocaionNumber = l.length;
    });
  }

}
