import { Injectable } from '@angular/core';
import {ApiService} from '../../services/API/api.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TypseService {
  constructor(private apiService: ApiService) { }
  getTypseResolve() {
    return this.apiService.getApi('types');
  }
  postTypeObservable(body: object): Observable<object> {
    return this.apiService.postApi('types', body);
  }
}
