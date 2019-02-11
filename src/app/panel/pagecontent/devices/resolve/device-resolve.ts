import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {DevicesService} from '../../../../models/device/devices.service';
import {Device} from '../../../../models/device/device';
import {Injectable, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable()
export class DeviceResolve implements OnInit, Resolve<Observable<object>> {
  constructor(private ApiServices: DevicesService) {
  }

  device: Device[];
  deviceObser: Observable<object>;

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<object> {
    this.deviceObser = this.ApiServices.getDeviceObservable();
    console.log(this.deviceObser);
    return this.deviceObser;
  }

  ngOnInit(): void {

  }

}
