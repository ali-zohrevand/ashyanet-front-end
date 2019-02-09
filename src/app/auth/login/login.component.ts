import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthenticationService} from '../../services/Auth/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  loginFailedNumber: number;
  loginFaield: boolean;
  @ViewChild('loginForm') loginForm: NgForm;

  constructor(private authService: AuthenticationService, private router: Router) {
    this.loginFaield = false;
    this.loginFailedNumber = 0;
  }

  ngOnInit() {
    if (this.authService.isAthunticated()) {
      this.router.navigate(['/panel']);

    }
  }


  onLogin() {
    console.log(this.username, this.password);
    this.authService.login(this.username, this.password).subscribe(
      result => {
        // login successful if there's a jwt token in the response
        /* if (user && user.token) {
           // store user details and jwt token in local storage to keep user logged in between page refreshes
           localStorage.setItem('token', JSON.stringify(user));
         }*/
        localStorage.setItem('token', result.token);
        console.log(result.token);
        this.router.navigate(['/panel']);

        return result;
        this.username = '';
        this.password = '';
      }, (error1: Response) => {
        console.log(error1);
        this.loginFaield = true;
        this.loginFailedNumber++;
        console.log(this.loginFailedNumber);

      });

  }
}
