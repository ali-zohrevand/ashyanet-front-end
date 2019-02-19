import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wizard-form',
  templateUrl: './wizard-form.component.html',
  styleUrls: ['./wizard-form.component.css']
})
export class WizardFormComponent implements OnInit {
   currentSection = 1;
   MaxSection = 4;
  done = 'done';

  constructor() { }

  ngOnInit() {
    console.log(this.currentSection);

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
