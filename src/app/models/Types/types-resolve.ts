import {Observable} from 'rxjs';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {TypseService} from './typse.service';
import {Injectable} from '@angular/core';
@Injectable()
export class TypesResolve implements Resolve<Observable<object>> {
  constructor(private typeService: TypseService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Observable<object>> |
    Promise<Observable<object>> | Observable<object> {
    return this.typeService.getTypseResolve();
  }
}
