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
import {DevicesService} from '../../../../models/device/devices.service';
import {StandardMessage} from '../../../../models/ApiMessage/standard-message';

@Component({
  selector: 'app-create-device',
  templateUrl: './create-device.component.html',
  styleUrls: ['./create-device.component.css']
})
export class CreateDeviceComponent implements OnInit {
  messageArray: object;
  @ViewChild('formRegister') createForm: NgForm;
  submitterStatus: boolean;
  submitMessage: string;
  IsFormValid: boolean;
  IsPredataLoaded: boolean;
  device: Device;
  dataName: string;
  advanceConfig = false;
  deviceOwnerName: string;
  deviceKey: string;
  password: string;
  rePassword: string;
  publishTopicName: string;
  basePathToAddTopicAddress: string;
  types: Types[];
  locations: Location[];
  subscribeTopicName: string;
  pubSubTopicName: string;
  deviceCommand: DeviceCommand;
  data_value_type: string;
  data_dsc: string;
  data_topic: string;
  command_address: string;
  command_name: string;
  command_value: string;
  command_dsc: string;
  LocationEmpty: boolean;
  TypesEmpty: boolean;
  constructor(private apiServices: ApiService, private deviceService: DevicesService) {
    this.messageArray = new Object();
    this.messageArray = {
      'error': 'خطایی رخ داده است. مجددا امتحان کنید.',
      'success': 'دستگاه با موفقیت ایجاد شد.',
      'DeviceExist': 'دستگاه با این نام وجود دارد.'
    };
    this.types = [];
    this.locations = [];
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
    this.LocationEmpty = true;
    this.TypesEmpty = true;

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
        if (this.deviceOwnerName !== 'GetdeviceOwnerName') {
          this.IsPredataLoaded = true;
        }
  },
  (errorResponse: Response) => {
    this.IsPredataLoaded = false;
  }
    );
    this.apiServices.getApi('key').subscribe(
      (key: Key) => {
        this.deviceKey = key.key;
        if (this.deviceKey !==  'GetdeviceKey' ) {
          this.IsPredataLoaded = true;

        }

      },
      (error: Response) => {
        this.IsPredataLoaded = false;
      }
    );
    this.apiServices.getApi('types').subscribe(
      (types: Types[]) => {
      this.types = types;
      if (this.types.length > 0) {
        this.TypesEmpty = false;

      }
      },
      (error: Response) => {
        this.IsPredataLoaded = false;

      }
    );
    this.apiServices.getApi('location').subscribe(
      (locations: Location[]) => {

        this.locations = locations;
        if (this.locations.length > 0) {
          this.LocationEmpty = false;
        }
      },
      (error: Response) => {
        this.IsPredataLoaded = false;


      }
    );

  }




  advanceConfigChecked() {
    this.advanceConfig = !this.advanceConfig;
  }

  onSubmit() {
    if (this.IsFormValid && this.createForm.valid) {
      this.device.owner.push(this.deviceOwnerName);
      this.device.key = this.deviceKey;
      this.device.mqtt_password = this.password;
      this.deviceService.PostDeviceObservable(this.device).subscribe(
        (message: StandardMessage) => {

          if (message.info === 'Device Created'){
            this.submitterStatus =true;
            this.submitMessage = this.messageArray['success'];
          }
          if (message.info === 'Device Exist'){
            this.submitterStatus =false;
            this.submitMessage = this.messageArray['success'];
          }
          console.log(message);
        }, (error: Response) => {
          this.submitMessage = this.messageArray['error'];
      }
      );
    }
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

  statusClassCssLoad() {
    if (this.submitterStatus) {
      return 'successSubmit';
    } else {
      return 'failedSubmit';
    }
  }
}
