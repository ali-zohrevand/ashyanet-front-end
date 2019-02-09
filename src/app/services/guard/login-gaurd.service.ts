import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthenticationService} from '../Auth/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGaurd implements CanActivate {
  constructor(private authService: AuthenticationService, private router: Router) {
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const ISAthunticated = this.authService.isAthunticated();
    if (ISAthunticated) {
      console.log('guard ok');
      return true;

    }
    console.log('guard not ok');
    this.authService.logout();
    this.router.navigate(['/login']);
    return false;
  }
}
