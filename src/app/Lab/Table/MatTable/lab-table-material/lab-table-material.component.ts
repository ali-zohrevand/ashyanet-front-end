import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
@Component({
  selector: 'app-lab-table-material',
  templateUrl: './lab-table-material.component.html',
  styleUrls: ['./lab-table-material.component.css']
})

export class LabTableMaterialComponent implements OnInit {
  displayedColumns: string[] = ['index', 'vin', 'year', 'brand', 'color'];
  cars: Car[];
  dataSource: MatTableDataSource<Car>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor() {
    this.cars = [
      { vin: 'vin',year: 1 , brand: 'sdsd' , color: 'red'},
      { vin: 'fdsf',year: 2 , brand: 'sdsd' , color: 'blue'},
      { vin: 'dfsf',year: 3 , brand: 'sdsd' , color: 'tellow'},
      { vin: 'sdfdf',year: 4 , brand: 'sdsd' , color: 'resdfdfd'},
      { vin: 'dfssdf',year: 5 , brand: 'sdsd' , color: 'dfdf'},
      { vin: 'vdfsdfin',year: 6 , brand: 'sdsd' , color: 'red'},
      { vin: 'vin',year: 7 , brand: 'sdsd' , color: 'red'},
      { vin: 'vdfin',year: 8 , brand: 'sdsd' , color: 'red'},
      { vin: 'fdfdsf',year: 9 , brand: 'sdsd' , color: 'red'},
      { vin: 'sdfdsf',year: 10 , brand: 'sdsd' , color: 'red'},
      { vin: 'dfsdf',year: 11 , brand: 'sdsd' , color: 'red'},

    ];
    this.dataSource = new MatTableDataSource(this.cars);
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }

}
export interface Car {
  vin;
  year;
  brand;
  color;
}
