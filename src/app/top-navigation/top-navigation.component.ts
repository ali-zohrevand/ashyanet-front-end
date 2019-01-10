import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.css']
})
export class TopNavigationComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    this.loadScript('../../../../../assets/vendors/jquery/dist/jquery.min.js');
    this.loadScript('../../../../../assets/vendors/jquery/dist/jquery.min.js');
    this.loadScript('../../../../../assets/vendors/bootstrap/dist/js/bootstrap.min.js');

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
}
