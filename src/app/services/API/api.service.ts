import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  kePath = 'admin/key';
   baseUrl = 'https://127.0.0.1:5000/';
   devicesLisPAth = 'user/devices';
   infoPath = 'user/info';
  locationPath = 'user/locations';
  typesPath = 'user/types';
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
        apiPath = this.locationPath;
        break;
      case 'types':
        apiPath = this.typesPath;
        break;
      default:
        break;
    }
    return this.httpClient.get(this.baseUrl + apiPath);

  }
  postApi(path: string, PostBody: object) {
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
        apiPath = this.locationPath;
        break;
      case 'types':
        apiPath = this.typesPath;
        break;
      default:
        break;
    }
    return this.httpClient.post(this.baseUrl + apiPath, PostBody);

  }

}
