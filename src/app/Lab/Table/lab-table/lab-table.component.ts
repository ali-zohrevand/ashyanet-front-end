import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-lab-table',
  templateUrl: './lab-table.component.html',
  styleUrls: ['./lab-table.component.css']
})
export class LabTableComponent implements OnInit {

  cars: Car[];
  // https://www.primefaces.org/primeng/#/setup
  //
  constructor() { }

  ngOnInit() {
    this.cars = [
      { vin: 'vin',year: 1990 , brand: 'sdsd' , color: 'red'},
      { vin: 'fdsf',year: 2323 , brand: 'sdsd' , color: 'blue'},
      { vin: 'dfsf',year: 19232390 , brand: 'sdsd' , color: 'tellow'},
      { vin: 'sdfdf',year: 2323 , brand: 'sdsd' , color: 'resdfdfd'},
      { vin: 'dfssdf',year: 2323 , brand: 'sdsd' , color: 'dfdf'},
      { vin: 'vdfsdfin',year: 2323 , brand: 'sdsd' , color: 'red'},
      { vin: 'vin',year: 32323 , brand: 'sdsd' , color: 'red'},
      { vin: 'vdfin',year: 32323 , brand: 'sdsd' , color: 'red'},
      { vin: 'fdfdsf',year: 234434 , brand: 'sdsd' , color: 'red'},
      { vin: 'sdfdsf',year: 23232 , brand: 'sdsd' , color: 'red'},
      { vin: 'dfsdf',year: 23434 , brand: 'sdsd' , color: 'red'},

    ];
  }

}
export interface Car {
  vin;
  year;
  brand;
  color;
}
