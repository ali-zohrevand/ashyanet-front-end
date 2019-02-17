import { Component, OnInit } from '@angular/core';
import {DevicesService} from '../../../../../models/device/devices.service';
import {Device} from '../../../../../models/device/device';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-topic',
  templateUrl: './list-topic.component.html',
  styleUrls: ['./list-topic.component.css']
})
export class ListTopicComponent implements OnInit {
  devices: Device[];
  devicesLoade: boolean;
  constructor(private deviceServices: DevicesService,private router: Router) {
    this.devices = [];
  }

  ngOnInit() {
    this.deviceServices.getDeviceObservable().subscribe((devicesArray: Device[]) => {
      if (devicesArray !== null && devicesArray.length > 0) {
          this.devices = devicesArray;
        console.log(devicesArray);

        this.devicesLoade = true;
          console.log(this.devices);
      }
      }, (error: Response) => {

      }
    );
  }
    showTopicMessages(topicAddress: string) {
    const bas64Path = btoa(topicAddress);
    console.log(bas64Path);
    this.router.navigate(['/panel/data/mqtt/' + bas64Path]);
    }
  }
