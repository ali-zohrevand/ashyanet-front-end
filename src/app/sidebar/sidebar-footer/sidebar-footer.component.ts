import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../services/Auth/authentication.service';

@Component({
  selector: 'app-sidebar-footer',
  templateUrl: './sidebar-footer.component.html',
  styleUrls: ['./sidebar-footer.component.css']
})
export class SidebarFooterComponent implements OnInit {

  constructor(private router: Router, private auth: AuthenticationService) { }

  ngOnInit() {
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['login']);
  }
}
