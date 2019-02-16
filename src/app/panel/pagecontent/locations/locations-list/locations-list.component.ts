import {Component, OnInit} from '@angular/core';
import {Location} from '../../../../models/Locations/location';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-locations-list',
  templateUrl: './locations-list.component.html',
  styleUrls: ['./locations-list.component.css']
})
export class LocationsListComponent implements OnInit {
  errorHapened: boolean;
  locations: Location[];
  HasLocationData: boolean;
  constructor(private route: ActivatedRoute) {
    this.locations = [];
    this.HasLocationData = false;
  }

  ngOnInit() {
    this.locations = this.route.snapshot.data.locations;
    console.log(this.locations);
    if (this.locations === null || this.locations['error']) {
      this.HasLocationData = false;
    } else {
      this.HasLocationData = true;
    }
  }

}
