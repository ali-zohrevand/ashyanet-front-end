import {Component, OnInit} from '@angular/core';
import {Device} from '../../../../models/device/device';
import {ApiService} from '../../../../services/API/api.service';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.css']
})
export class DeviceListComponent implements OnInit {
   devices: Device[];
   errorHapened: boolean;
   notAccess: boolean;
  constructor(private api: ApiService) {
    this.errorHapened = true;
    this.notAccess = false;
    this.devices = [];
  }

  ngOnInit() {
    this.api.getApi('devices').subscribe(
      ((reponse: Device[]) => {
        this.errorHapened = false;
        if (reponse.length > 0 ) {
          this.devices = reponse;
        }
        //   console.log(this.devices);
        console.log(reponse);
      }), (error: Response) => {
          this.errorHapened = true;
          if (error.status === 401) {
          this.notAccess = true;
          }
      }
    );
  }

}
