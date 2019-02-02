import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Device} from '../../../../models/device/device';

@Component({
  selector: 'app-create-device',
  templateUrl: './create-device.component.html',
  styleUrls: ['./create-device.component.css']
})
export class CreateDeviceComponent implements OnInit {
   section = 1;
   totalSection = 6;
   advanceConfig = false;
   deviceName: string;
   deviceOwnerName: string;
   deviceKey: string;
   location: string;
   password: any;
   rePassword: any;
   publishTopicName: string;
   basePathToAddTopicAddress: string;
   ArrayPublishTopicAddress: string[];

   newDevice: Device;
   createDeviceForm: FormGroup;
  commandAddress: string;
  constructor() {
    this.deviceOwnerName = 'GetdeviceOwnerName';
    this.deviceKey = 'GetdeviceKey';
    this.basePathToAddTopicAddress = '/serverId/UserName';
    this.ArrayPublishTopicAddress = [];
    this.location = 'home';
    this.advanceConfig = false;
  }

  ngOnInit() {
    this.createDeviceForm = new FormGroup({
      'deviceName': new FormControl(null, Validators.required),
      'description': new FormControl(),
      'type' : new FormControl('lamp', Validators.required),
      'owner': new FormControl(null, Validators.required),
      'key': new FormControl(null, Validators.required),
      'password': new FormControl(null, [Validators.required]),
      'rePassword': new FormControl(null, [Validators.required]),
      'location': new FormControl(),
      'publish': new FormControl(),
      'subscribe': new FormControl(),
      'pubsub': new FormControl(),
      'dataName': new FormControl(),
      'dataType': new FormControl(),
      'dataDescription' : new FormControl(),
      'dataAddress': new FormControl(),
      'commandName': new FormControl(),
      'commandValue': new FormControl(),
      'commandDescription' : new FormControl(),
      'commandAddress': new FormControl()
    });
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

  onSubmit() {
    console.log(this.createDeviceForm);
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
