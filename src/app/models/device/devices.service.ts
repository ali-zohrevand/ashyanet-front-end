import {Injectable, OnInit} from '@angular/core';
import {Device} from './device';
import {ApiService} from '../../services/API/api.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DevicesService  implements OnInit {
  devices: Device[];
  // deviceObser: Observable<Device[]>;
  public errorHapened: boolean;
  notAccess: boolean;
  n;
  constructor(private ApiServices: ApiService) {

    this.devices = [];
  }

  ngOnInit() {
   /* this.deviceObser = new Observable((observer: Observer<Device[]>) => {
      this.ApiServices.getApi('devices').subscribe(
        ((deivces: Device[]) => {
          console.log(deivces);
          observer.next(deivces);
          //   console.log(this.devicesObservable);
        }), (error: Response) => {
          observer.error(error);
        }
      );
    });*/
  }
  getDevices(): Device[] {
    this.ApiServices.getApi('devices').subscribe(
      ((deivces: Device[]) => {
        console.log(deivces);
        return deivces;
      }), (error: Response) => {
      }
    );
    return this.devices;
  }

  getDeviceObservable(): Observable<object> {
    return this.ApiServices.getApi('devices');
  }
  PostDeviceObservable(body: object): Observable<object> {
    return this.ApiServices.postApi('devices', body);
  }
}
