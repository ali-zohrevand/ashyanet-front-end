import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-create-device',
  templateUrl: './create-device.component.html',
  styleUrls: ['./create-device.component.css']
})
export class CreateDeviceComponent implements OnInit {
  section = 1;
  totalSection = 6;
  advanceConfig = false;

  constructor() {
  }

  ngOnInit() {
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
}
