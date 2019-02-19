import { Component, OnInit } from '@angular/core';
import {Device} from '../../../../models/device/device';
import {DevicesService} from '../../../../models/device/devices.service';
import {el} from '@angular/platform-browser/testing/src/browser_util';
import {DeviceCommand} from '../../../../models/device/device-command';

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
  constructor(private deviceServices: DevicesService) {
  }

  ngOnInit() {
    this.selectedDevices = new Device();
    this.selectedCommand = new DeviceCommand();
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
    console.log(this.currentSection);
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
    console.log(this.currentSection);

  }
}
