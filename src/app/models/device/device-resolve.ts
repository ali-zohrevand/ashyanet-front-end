import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {DevicesService} from './devices.service';
import {Device} from './device';
import {Injectable, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable()
export class DeviceResolve implements OnInit, Resolve<Observable<object>> {
  constructor(private ApiServices: DevicesService) {
  }

  deviceObser: Observable<object>;

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<object> {
    this.deviceObser = this.ApiServices.getDeviceObservable();
    console.log(this.deviceObser);
    return this.deviceObser;
  }

  ngOnInit(): void {

  }

}
