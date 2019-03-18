import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Device} from '../../../../models/device/device';
import {DevicesService} from '../../../../models/device/devices.service';
import {el} from '@angular/platform-browser/testing/src/browser_util';
import {DeviceCommand} from '../../../../models/device/device-command';
import {Condition} from '../../../../models/Event/condition';
import {EventService} from '../../../../models/Event/event.service';
import {EventDataCommand} from '../../../../models/Event/event-data-command';
import {StandardMessage} from '../../../../models/ApiMessage/standard-message';
import {AlertifyService} from '../../../../services/alertify/alertify.service';
import {SweetAlertService} from '../../../../services/sweetAlert/sweet-alert.service';
import {SweetAlert2Service} from '../../../../services/sweetAlert/sweet-alert2.service';
 @Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.css']
})
export class EventCreateComponent implements OnInit , OnChanges {

  currentSection = 1;
  MaxSection = 4;
  done = 'done';
  devices: Device[];
  selectedDevices: Device;
  IseDevicesLoaded: boolean;
  selectedAddress: string;
  commandsNumber = 0;
  selectedCommand: DeviceCommand;
  @Input() conditionSelected: Condition;
  resetCondition: boolean;
  constructor(private deviceServices: DevicesService, private eventService: EventService, private alert: SweetAlert2Service) {
  }

  ngOnInit() {
    this.selectedDevices = new Device();
    this.selectedCommand = new DeviceCommand();
    this.conditionSelected = new Condition();
    this.deviceServices.getDeviceObservable().subscribe((devices: Device[]) => {
        this.devices = devices;
        if (this.devices !== null && this.devices.length > 0) {
          this.IseDevicesLoaded = true;
          this.devices.forEach((device: Device) => {
            if (device.command !== null && device.command.length > 0) {
              this.commandsNumber = this.commandsNumber + device.command.length;
            }
          });
        } else {
          this.IseDevicesLoaded = false;
        }
      }, (err: Response) => {
        this.IseDevicesLoaded = false;
      }
    );
  }

  nexSection() {

    this.currentSection = this.currentSection + 1;
  }
  whatIsMyStyle(sectionNumber: number) {
    if (sectionNumber === this.currentSection) {
      return 'selected';
    }
    if (sectionNumber < this.currentSection) {
      return 'done';
    }
    if (sectionNumber > this.currentSection ) {
      return 'disabled';
    }
  }

  prevSection() {
    this.currentSection = this.currentSection - 1;

  }

  IsConditionSelected() {

    const condition = this.eventService.getCondition();

    if ((condition.attr.length > 0 && condition.attr.length < 3) || condition.json_attribute_name !== ''  ) {
      this.conditionSelected.attr = condition.attr;
      if (condition.json_attribute_name !== '') {
        this.conditionSelected.json_attribute_name = condition.json_attribute_name;

      }

    }
    if (this.conditionSelected !== null && this.conditionSelected.condition_type !== null && this.conditionSelected.attr.length > 0
      && this.selectedDevices.devicename !== '' && this.selectedAddress !== '') {
      return true;
      console.log(this.conditionSelected);

    }
    return false;
  }

  clearCondition() {
    this.conditionSelected = new Condition();
    this.eventService.clearCondition();
    this.resetCondition = true;
  }
  submitEvent() {

    if (this.selectedCommand.name !== '' && this.selectedAddress !== '' && this.conditionSelected &&
      this.selectedAddress !== '' && this.selectedDevices.devicename !== ''  ) {
      const event = new EventDataCommand();
      event.address_topic_name = this.selectedAddress;
      event.command_name = this.selectedCommand.name;
      event.command_type = 0;
      event.condition = this.conditionSelected;
      this.eventService.PostEventObservable(event).subscribe((message: StandardMessage) => {
        console.log('message');
        this.alert.successAlert('ایجاد رخ داد' , 'رخ داد با موفقیت ایجاد شد.');
        console.log(message);

      }, (err: Response) => {
        console.log('err');
        this.alert.errorAlert('ایجاد رح داد', 'خطایی رخ  داد.' );
        console.log(err);
      });

      this.clearCondition();
      this.selectedCommand = new DeviceCommand();
      this.selectedAddress = '';
      this.selectedDevices = null;
    } else {
      this.alert.infoAlert('ایجاد رح داد', 'موارد مورد نیاز ارایه شده را انتخاب نمایید.' );

    }

  }

   ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
}
