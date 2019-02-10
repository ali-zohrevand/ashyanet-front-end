import {Component, OnInit} from '@angular/core';
import {Device} from '../../../../models/device/device';
import {ApiService} from '../../../../services/API/api.service';
import {DevicesService} from '../../../../models/device/devices.service';
import {DeviceResolve} from '../resolve/device-resolve';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.css']
})
export class DeviceListComponent implements OnInit {
   devices: Device[];
   errorHapened: boolean;
   notAccess: boolean;
  constructor(private deviceAPi: DevicesService, private route: ActivatedRoute) {
    this.errorHapened = false;
    this.notAccess = false;
    this.devices = [];
  }

  ngOnInit() {
      this.devices = this.route.snapshot.data.devicesList;
    this.notAccess = this.deviceAPi.errorHapened;
    console.log(this.devices);

  }

}
