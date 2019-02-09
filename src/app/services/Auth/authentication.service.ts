import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    return this.http.post<{token: string}>(`https://127.0.0.1:5000/login`, { username, password });
  }

  logout() {
    let token = localStorage.getItem('token');

    // remove user from local storage to log user out
    while (token !== null) {
      localStorage.removeItem('token');
      token = localStorage.getItem('token');
    }
  }
  isAthunticated() {
    const token = localStorage.getItem('token');
    if (token === null) {
      return false;
    }
    /*    this.http.get<{valid: boolean}>('https://127.0.0.1:5000/jwt/' + token).subscribe(
          response => {
            console.log(response);
            if (response.valid) {
              return true;
            }
            return false;
          },
          (error1: Response) => {
            console.log(error1);
            return false;
          }
        );*/
  return true;
  }

}
