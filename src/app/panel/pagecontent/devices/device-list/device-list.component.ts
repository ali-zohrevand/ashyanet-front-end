import {Component, OnInit} from '@angular/core';
import {Device} from '../../../../models/device/device';
import {DevicesService} from '../../../../models/device/devices.service';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.css']
})
export class DeviceListComponent implements OnInit {
   devices: Device[];
  deviceObser: Observable<Device[]>;
   errorHapened: boolean;
   notAccess: boolean;
  deviceHasData: boolean;
  constructor(private deviceAPi: DevicesService, private route: ActivatedRoute) {
    this.errorHapened = false;
    this.deviceHasData = false;
    this.notAccess = false;
    this.devices = [];

  }

  ngOnInit() {
    this.devices = [];
    console.log(this.devices);
    console.log(this.route.snapshot.data.devicesList);
      this.devices = this.route.snapshot.data.devicesList;
    if (this.devices !== null) {
      this.deviceHasData = true;
    }
    this.notAccess = this.deviceAPi.errorHapened;

  }


}
