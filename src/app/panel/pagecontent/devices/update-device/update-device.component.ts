import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-update-device',
  templateUrl: './update-device.component.html',
  styleUrls: ['./update-device.component.css']
})
export class UpdateDeviceComponent implements OnInit {
  private advanceConfig = false;
  private deviceName: string;
  private deviceOwnerName: string;
  private deviceKey: string;
  private location: any;
  private password: any;
  private rePassword: any;
  private publishTopicName: string;
  private basePathToAddTopicAddress: string;
  private ArrayPublishTopicAddress: string[];

  constructor() {
    this.deviceOwnerName = 'GetdeviceOwnerName';
    this.deviceKey = 'GetdeviceKey';
    this.basePathToAddTopicAddress = '/serverId/UserName';
    this.ArrayPublishTopcAddress = [];
  }

  ngOnInit() {
  }

  addPublishTopicAdress() {
    this.ArrayPublishTopicAddress.push(this.publishTopicName);
  }

  deletPublishTopic(i: number) {
    if (i > -1 && i < this.ArrayPublishTopicAddress.length) {
      this.ArrayPublishTopicAddress.splice(i, 1);
    }
  }
}
