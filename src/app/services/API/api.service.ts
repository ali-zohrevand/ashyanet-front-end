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
  dataPath = 'user/data';
  apiPath = '';

  constructor(private httpClient: HttpClient) { }

  getApi(path: string) {
    const apiPath = this.pathFixer(path);
    return this.httpClient.get(this.baseUrl + apiPath);

  }
  postApi(path: string, PostBody: object) {
    let apiPath ;
    apiPath = this.pathFixer(path);
    return this.httpClient.post(this.baseUrl + apiPath, PostBody);

  }
pathFixer(path: string): string {
  switch (path) {
    case 'mqtt':
      this.apiPath = '/user/mqtt';
      break;
    case 'mqtt-sub':
      this.apiPath = '/user/mqtt/sub';
      break;
    case 'mqtt-pub':
      this. apiPath = '/user/mqtt/pub';
      break;
    case 'devices':
      this.apiPath = this.devicesLisPAth;
      break;
    case 'info':
      this. apiPath = this.infoPath;
      break;
    case 'key':
      this.apiPath = this.kePath;
      break;
    case 'location':
      this.apiPath = this.locationPath;
      break;
    case 'types':
      this.apiPath = this.typesPath;
      break;
    case 'data':
      this.apiPath = this.dataPath;
      break;
    default:
      break;
  }
  return this.apiPath;
}
}
