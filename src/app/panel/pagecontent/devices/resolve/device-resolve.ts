import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {DevicesService} from '../../../../models/device/devices.service';
import {Device} from '../../../../models/device/device';
import {ApiService} from '../../../../services/API/api.service';
import {Injectable} from '@angular/core';
@Injectable()
export class DeviceResolve implements Resolve<any> {

  constructor(private ApiServices: DevicesService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Device[] {

    return this.ApiServices.getDevices();
  }
}
