import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs';
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
    if (this.authService.isAthunticated()) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
