import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Device} from '../../../../models/device/device';
import {Location} from '../../../../models/Locations/location';

@Component({
  selector: 'app-create-device',
  templateUrl: './create-device.component.html',
  styleUrls: ['./create-device.component.css']
})
export class CreateDeviceComponent implements OnInit {
  @ViewChild('formRegister') createForm: NgForm;
   device: Device;
  section = 1;
  totalSection = 6;
  advanceConfig = false;
  deviceName: string;
  deviceOwnerName: string;
  deviceKey: string;
  location: any;
  password: any;
  rePassword: any;
  publishTopicName: string;
  basePathToAddTopicAddress: string;
  ArrayPublishTopicAddress: string[];
  types: string[];
  locations: Location[];
  constructor() {
    this.device= new Device();
    this.deviceOwnerName = 'GetdeviceOwnerName';
    this.deviceKey = 'GetdeviceKey';
    this.basePathToAddTopicAddress = '/serverId/UserName';
    this.ArrayPublishTopicAddress = [];
    const l1 = new Location('', 'خانه', 'home', '', null, '', '', '', null);
    const l2 = new Location('', 'اتاق', 'room', '', null, '', '', '', null);
    this.locations = [l1, l2];
    this.types = ['light', 'moveMent'];
  }

  ngOnInit() {
    this.createForm.valueChanges.subscribe(
      (value ) => {
        console.log(value);
      }
    );

  }

  next() {
    if (this.section < this.totalSection) {
      this.section = this.section + 1;

    }
  }

  prev() {
    if (this.section !== 1) {
      this.section = this.section - 1;
    }
  }

  getSectionStyle(input: number) {
    if (input < this.section) {
      return 'done';
    }
    if (input === this.section) {
      return 'selected';
    }
    if (input > this.section) {
      return 'disabled';
    }
  }

  isFirstSection() {
    if (this.section === 1) {
      return true;
    }
    return false;
  }

  isLastSection() {
    if (this.section === this.totalSection) {
      return true;
    }
    return false;
  }

  advanceConfigChecked() {
    this.advanceConfig = !this.advanceConfig;
    console.log('Checked');
    console.log(this.advanceConfig);
  }

  onSubmit(form: NgForm) {
    console.log(form);
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
