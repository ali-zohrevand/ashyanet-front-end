import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  register = false;
  recovery = false;
  login = true;
  constructor() {
  }

  ngOnInit() {
  }
  ShowRegister() {
    this.register = true;
    this.recovery = false;
    this.login = false;
  }
  ShowLogin(){
    this.register = false;
    this.recovery = false;
    this.login = true;
  }
  ShowRecovery(){
    this.register = false;
    this.recovery = true;
    this.login = false;
  }
}
