import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Location} from '../../../../models/Locations/location';
import {LocationsService} from '../../../../models/Locations/locations.service';
import {StandardMessage} from '../../../../models/ApiMessage/standard-message';

@Component({
  selector: 'app-location-create',
  templateUrl: './location-create.component.html',
  styleUrls: ['./location-create.component.css']
})
export class LocationCreateComponent implements OnInit {
  @ViewChild('createLocation') createForm: NgForm;
  locationObj: Location;
  LocationDisplayName: string;
  locationExist:boolean;
  locationCode: string;

  LocationCodNameIsNotEnglish: boolean;
  SubmitStatus: boolean;
  constructor(private locationAPi: LocationsService) {
    this.LocationCodNameIsNotEnglish = false;
    this.locationObj =  new Location();
  }

  ngOnInit() {
    this.createForm.valueChanges.subscribe(((value) => {
      this.LocationCodNameIsNotEnglish = !this.IsEnglishWord(value['locationCode']);
    }));
  }

  createLocationSubmit() {

    if (this.createForm.valid && !this.LocationCodNameIsNotEnglish) {
      console.log(this.locationObj);
      this.locationAPi.PostLocationObservable(this.locationObj).subscribe((message: StandardMessage) => {
        if (message.info === 'Location Created') {
          this.SubmitStatus = true;
        }
        if (message.error === 'Location Exist') {
          this.locationExist = true;
          this.SubmitStatus = false;
        }
      }, (error: Response) => {
        this.SubmitStatus = false;
        });
    } else {
    }
    this.resetPage();
  }
  IsEnglishWord(topicName: string) {
    let Is = true;
    const validChar = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMOPQRSTUVWXYZ0123456789';
    if (topicName != null) {
      const address = String(topicName);
      for (let i = 0; i < address.length ; i++ ) {
        const tempChar = address.charAt(i);
        if (!validChar.includes(tempChar)) {
          Is = false;
          break;
        }
      }
      return Is;
    }
  }
  resetPage() {
    this.LocationCodNameIsNotEnglish = false;
    this.createForm.onReset();

  }
}
