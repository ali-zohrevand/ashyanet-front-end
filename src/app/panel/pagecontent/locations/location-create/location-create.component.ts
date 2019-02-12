import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-location-create',
  templateUrl: './location-create.component.html',
  styleUrls: ['./location-create.component.css']
})
export class LocationCreateComponent implements OnInit {
  LocationDisplayName: string;
  locationCode: string;
  ParentLocation: string;
  Longtitude: string;
  Latitude: string;
  Dsc: string;

  constructor() { }

  ngOnInit() {
  }

}
