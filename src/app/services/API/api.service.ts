import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Device} from '../../models/device/device';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
   baseUrl = 'https://127.0.0.1:5000/';
   devicesLisPAth = 'user/devices';
  constructor(private httpClient: HttpClient) { }
  getApi(path: string) {
    switch (path) {
      case 'devices':
      return this.httpClient.get<Device[]>(this.baseUrl + this.devicesLisPAth);
      break;
      default:
        return null;
    }
  }
}
