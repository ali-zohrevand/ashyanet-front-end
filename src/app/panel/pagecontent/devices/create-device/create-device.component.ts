import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Device} from '../../../../models/device/device';
import {Location} from '../../../../models/Locations/location';
import {Types} from '../../../../models/Types/types';
import {DeviceCommand} from '../../../../models/device/device-command';
import {DeviceData} from '../../../../models/device/device-data';
import {ApiService} from '../../../../services/API/api.service';
import {Info} from '../../../../models/Info/info';
import {Key} from '../../../../models/key/key';

@Component({
  selector: 'app-create-device',
  templateUrl: './create-device.component.html',
  styleUrls: ['./create-device.component.css']
})
export class CreateDeviceComponent implements OnInit {
  @ViewChild('formRegister') createForm: NgForm;
  IsFormValid: boolean;
  IsPredataLoaded: boolean;
  device: Device;
  dataError: string;
  dataName: string;
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
  types: Types[];
  locations: Location[];
  subscribeTopicName: string;
  pubSubTopicName: string;
  deviceCommand: DeviceCommand;
  data_value_type: string;
  dsc: string;
  data_dsc: string;
  data_topic: string;
  command_address: string;
  command_name: string;
  command_value: string;
  command_dsc: string;
  constructor(private apiServices: ApiService) {
    this.IsFormValid = true;
    this.IsPredataLoaded = false;
    this.deviceCommand = new DeviceCommand();
    this.command_address = '';
    this.command_name = '';
    this.command_value = '';
    this.data_value_type = 'int';
    this.data_topic = '';
    this.dataName = '';
    this.device = new Device();
    this.device.publish = [];
    this.device.commands = [];
    this.deviceOwnerName = 'GetdeviceOwnerName';
    this.deviceKey = 'GetdeviceKey';
    this.basePathToAddTopicAddress = '/serverId/UserName';
    this.ArrayPublishTopicAddress = [];
    const l1 = new Location('', 'خانه', 'home', '', null, '', '', '', null);
    const l2 = new Location('', 'اتاق', 'room', '', null, '', '', '', null);
    const t1 = new Types();
    t1.Name = 'light';
    const t2 = new Types();
    t2.Name = 'moveMent';
    this.locations = [l1, l2]; // TODO: Get Location from api
    this.types = [t1, t2]; // TODO: Get Types From api
  }

  ngOnInit() {
 /*   this.createForm.valueChanges.subscribe(
      (value ) => {
        console.log(value);
      }
    );*/
    this.apiServices.getApi('info').subscribe(
      (info: Info) => {
        this.basePathToAddTopicAddress = info.topic_root_path;
        this.deviceOwnerName = info.username;
        this.IsPredataLoaded = true;
  },
  (errorResponse: Response) => {
    this.IsPredataLoaded = false;
  }
    );
    this.apiServices.getApi('key').subscribe(
      (key: Key) => {
        this.deviceKey = key.key;
        this.IsPredataLoaded = true;

      },
      (error: Response) => {
        this.IsPredataLoaded = false;
      }
    );
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
    if ( this.IsValidTopicName(this.publishTopicName)) {
      this.device.publish.push(this.basePathToAddTopicAddress + '/' + this.publishTopicName);

    }
  }
  deletPublishTopic(i: number) {
    if (i > -1 && i < this.device.publish.length) {
      this.device.publish.splice(i, 1);
    }
  }
  IsValidTopicName(topicName: string) {
    const validChar = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMOPQRSTUVWXYZ0123456789-/';
  if (topicName != null) {
    const address = String(topicName);
    for (let i = 0; i < address.length ; i++ ) {
      const tempChar = address.charAt(i);
      if (!validChar.includes(tempChar)) {
        return false;
      }
    }
    return true;
  }
  }

  addSuubscribeTopicName() {
    if ( this.IsValidTopicName(this.subscribeTopicName)) {
      this.device.subscribe.push(this.basePathToAddTopicAddress + '/' + this.subscribeTopicName);

    }
  }
  deletSubTopic(i: number) {
    if (i > -1 && i < this.device.subscribe.length) {
      this.device.subscribe.splice(i, 1);
    }
  }
  addSPubSubTopicName() {
    if ( this.IsValidTopicName(this.pubSubTopicName)) {
      this.device.pubsub.push(this.basePathToAddTopicAddress + '/' + this.pubSubTopicName);

    }
  }
  deletPubSubTopic(i: number) {
    if (i > -1 && i < this.device.pubsub.length) {
      this.device.pubsub.splice(i, 1);
    }
  }

  addData() {
    if (this.IsValidTopicName(this.data_topic) && this.isDataAddressOk() && this.dataName !== '') {

      const data = new DeviceData;
      data.topic = this.basePathToAddTopicAddress + '/' + this.data_topic;
      data.dsc = this.data_dsc;
      data.value_type = this.data_value_type;
      data.name = this.dataName;
      this.device.data.push(data);
      this.dataName = '';
      this.data_topic = '';
      this.data_value_type = '';
      this.data_dsc = '';

    }
  }
  isDataAddressOk() {
    if (this.dataName === '') {
      return true;
    }
    if (this.dataName !== '' && this.data_topic === '') {
      return false;
    }
    return true;
  }
  deleteData(i: number) {
    if (i > -1 && i < this.device.data.length) {
      this.device.data.splice(i, 1);
    }
  }

  isCommandAddressOk() {
    if (this.command_name === '') {
      return true;
    }
    if (this.command_name !== '' && this.command_address === '') {
      return false;
    }
    return false;
  }

  addCommand() {
    if (this.IsValidTopicName(this.command_address) && this.command_name !== '' && this.command_value !== '') {

      const command = new DeviceCommand();
      command.name = this.command_name;
      command.dsc = this.command_dsc;
      command.topic = this.basePathToAddTopicAddress + '/' + this.command_address;
      command.value = this.command_value;
      this.command_value = '';
      this.command_name = '';
      this.command_dsc = '';
      this.command_address = '';
      this.device.commands.push(command);
    }
  }
  deleteCommand(i: number) {
    if (i > -1 && i < this.device.commands.length) {
      this.device.commands.splice(i, 1);
    }
  }

  iscommandValueOk() {
    if (this.command_name === '') {
      return true;
    }
    if (this.command_name !== '' && this.command_value === '') {
      return false;
    }
    return false;  }
}
