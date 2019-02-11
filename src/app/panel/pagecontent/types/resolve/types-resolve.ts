import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Types} from '../../../../models/Types/types';
import {Observable} from 'rxjs';

export class TypesResolve implements Resolve<Types []> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Types[]> | Promise<Types[]> | Types[] {
    return undefined;
  }
}
