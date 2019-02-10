import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../../services/API/api.service';
import {Location} from '../../../models/Locations/location';
import {Device} from '../../../models/device/device';
import {DevicesService} from '../../../models/device/devices.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  deviceNumber: number;
  LocaionNumber: number;
  constructor(private apiServices: DevicesService,private APiServices: ApiService) { this.deviceNumber = 0; this.LocaionNumber=0; }

  ngOnInit() {
   this.deviceNumber= this.apiServices.getDevices().length;
    this.APiServices.getApi('location').subscribe(
      (locations: Location[]) => {
        this.LocaionNumber = locations.length;
      },
      (error: Response) => {
      }
    );
  }

}
