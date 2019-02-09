import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Device} from '../../models/device/device';
import {Info} from '../../models/Info/info';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  kePath = 'admin/key';
   baseUrl = 'https://127.0.0.1:5000/';
   devicesLisPAth = 'user/devices';
   infoPath = 'user/info';

  constructor(private httpClient: HttpClient) { }

  getApi(path: string) {
    let apiPath = '';
    switch (path) {
      case 'devices':
        apiPath = this.devicesLisPAth;
        break;
      case 'info':
        apiPath = this.infoPath;
        break;
      case 'key':
        apiPath = this.kePath;
        break;
      case 'location':
        break;
      case 'types':
        break;
      default:
        break;
    }
    return this.httpClient.get(this.baseUrl + apiPath);

  }

  getDevices() {
    return this.httpClient.get<Device[]>(this.baseUrl + this.devicesLisPAth);
  }

  getInfo() {
    return this.httpClient.get<Info>(this.baseUrl + this.infoPath);

  }

}
