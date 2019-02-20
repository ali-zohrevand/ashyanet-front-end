import { Component, OnInit } from '@angular/core';
import {Device} from '../../../../models/device/device';
import {DevicesService} from '../../../../models/device/devices.service';
import {el} from '@angular/platform-browser/testing/src/browser_util';
import {DeviceCommand} from '../../../../models/device/device-command';
import {Condition} from '../../../../models/Event/condition';
import {EventService} from '../../../../models/Event/event.service';

@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.css']
})
export class EventCreateComponent implements OnInit {

  currentSection = 1;
  MaxSection = 4;
  done = 'done';
  devices: Device[];
  selectedDevices: Device;
  IseDevicesLoaded: boolean;
  selectedAddress: string;
  commandsNumber = 0;
  selectedCommand: DeviceCommand;
  inpuType: string;
  conditionSelected: Condition;
  conditionType: number;
  firstAttr: any;
  secondAttr: any;
  constructor(private deviceServices: DevicesService, private eventService: EventService) {
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
    const  cond = this.eventService.getCondition();
    console.log(cond);
    if (cond !==null && cond.condition_type !==null && cond.attr.length> 0){
      return true;
    }
    return false;
  }
}
