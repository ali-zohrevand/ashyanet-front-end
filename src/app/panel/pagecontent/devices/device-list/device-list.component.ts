import {Component, OnInit, ViewChild} from '@angular/core';
import {Device} from '../../../../models/device/device';
import {DevicesService} from '../../../../models/device/devices.service';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {Car} from '../../../../Lab/Table/MatTable/lab-table-material/lab-table-material.component';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.css']
})
export class DeviceListComponent implements OnInit {
  displayedColumns: string[] = ['index', 'devicename', 'description', 'type', 'location', 'op'];
  dataSource: MatTableDataSource<Device>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  devices: Device[];
  deviceObser: Observable<Device[]>;
   errorHapened: boolean;
   notAccess: boolean;
  deviceHasData: boolean;
  constructor(private deviceAPi: DevicesService, private route: ActivatedRoute) {
    this.errorHapened = false;
    this.deviceHasData = false;
    this.notAccess = false;
  }

  ngOnInit() {
    this.devices = [];
    console.log(this.devices);
    console.log(this.route.snapshot.data.devicesList);
      this.devices = this.route.snapshot.data.devicesList;
    if (this.devices !== null) {
      this.deviceHasData = true;
    }
    this.notAccess = this.deviceAPi.errorHapened;
    this.dataSource = new MatTableDataSource(this.devices);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
