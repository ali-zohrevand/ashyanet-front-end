import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../../../services/API/api.service';
import {Location} from '../../../../models/Locations/location';

@Component({
  selector: 'app-locations-list',
  templateUrl: './locations-list.component.html',
  styleUrls: ['./locations-list.component.css']
})
export class LocationsListComponent implements OnInit {
  errorHapened: boolean;
  locations: Location[];

  constructor(private apiServcies: ApiService) {
    this.locations = [];
  }

  ngOnInit() {
    this.apiServcies.getApi('location').subscribe(
      (locations: Location[]) => {
        this.locations = locations;
        this.errorHapened = false;

      },
      (error: Response) => {
        if (error.status === 404) {
          this.locations = [];
          this.errorHapened = false;
        } else {
          this.errorHapened = true;

        }


      }
    );
  }

}
