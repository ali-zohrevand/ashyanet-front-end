import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Device} from '../../models/device/device';
import {Info} from '../../models/Info/info';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
   baseUrl = 'https://127.0.0.1:5000/';
   devicesLisPAth = 'user/devices';
   infoPath = 'user/info';
  constructor(private httpClient: HttpClient) { }
  getApi(path: string) {
    switch (path) {
      case 'devices':
      return this.httpClient.get<Device[]>(this.baseUrl + this.devicesLisPAth);
      break;
      case 'info':
        return this.httpClient.get<Info>(this.baseUrl + this.infoPath);
        break;
      default:
        return null;
    }
  }
}
