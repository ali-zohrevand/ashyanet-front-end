import { Injectable } from '@angular/core';
import {ApiService} from '../../services/API/api.service';

@Injectable({
  providedIn: 'root'
})
export class TypseService {

  constructor(private apiService: ApiService) { }
  getTypseResolve() {
    return this.apiService.getApi('types');
  }
}
