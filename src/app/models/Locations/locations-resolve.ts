import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {LocationsService} from './locations.service';
import {Injectable} from '@angular/core';
@Injectable()
export class LocationsResolve  implements Resolve<Observable<object>> {
  locatinObservable: Observable<object>;
  constructor(private LocationsSerivceL: LocationsService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<object> {
    this.locatinObservable = this.LocationsSerivceL.getLocationObservable();
    console.log(this.locatinObservable);
    return  this.locatinObservable;
  }
}
