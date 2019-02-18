import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../services/Auth/authentication.service';
import {ApiService} from '../services/API/api.service';
import {Info} from '../models/Info/info';

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.css']
})
export class TopNavigationComponent implements OnInit {
  private info:  Info;
  private UserName: string;
  constructor(private router: Router, private auth: AuthenticationService, private apiService: ApiService, private authService: AuthenticationService) {

    this.info = new Info();
  }

  ngOnInit() {
    this.loadScript('../../../../../assets/vendors/jquery/dist/jquery.min.js');
    this.loadScript('../../../../../assets/vendors/jquery/dist/jquery.min.js');
    this.loadScript('../../../../../assets/vendors/bootstrap/dist/js/bootstrap.min.js');
    this.apiService.getApi('info').subscribe(
      (info: Info) => {
        this.info = info;
        this.UserName = info.name;
        if (this.UserName === '' || this.UserName === null)     {
         this.logout();
        }

      }, (errorResponse: Response) => {
        this.logout();
      }
    );

  }

  public loadScript(url: string) {
    const body = <HTMLDivElement>document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }
  logout() {
    this.auth.logout();
    this.router.navigate(['login']);
  }
}
