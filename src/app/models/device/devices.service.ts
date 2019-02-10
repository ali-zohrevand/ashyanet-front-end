import {Injectable, OnInit} from '@angular/core';
import {Device} from './device';
import {ApiService} from '../../services/API/api.service';

@Injectable({
  providedIn: 'root'
})
export class DevicesService  implements OnInit {
  devices: Device[];
  public errorHapened: boolean;
  notAccess: boolean;
  n;
  constructor(private ApiServices: ApiService) {
    this.devices = [];
  }
  ngOnInit(): void {

  }
  getDevices(): Device[] {
    this.ApiServices.getApi('devices').subscribe(
      ((reponse: Device[]) => {
        this.devices = reponse;
        //   console.log(this.devices);
      }), (error: Response) => {
        this.errorHapened = true;
      }
    );
    return this.devices;
  }
}
