import { Injectable } from '@angular/core';
import {ApiService} from '../../services/API/api.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  constructor(private apiService: ApiService) { }
  getLocationObservable(): Observable<object> {
    return this.apiService.getApi('location');
  }
}
