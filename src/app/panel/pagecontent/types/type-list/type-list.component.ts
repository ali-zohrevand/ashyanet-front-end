import {Component, OnInit} from '@angular/core';
import {Types} from '../../../../models/Types/types';
import {ApiService} from '../../../../services/API/api.service';
import {DevicesService} from '../../../../models/device/devices.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-type-list',
  templateUrl: './type-list.component.html',
  styleUrls: ['./type-list.component.css']
})
export class TypeListComponent implements OnInit {
  types: Types[];
  errorHapened: boolean;
  HasTypeObject: boolean;
  constructor( private route: ActivatedRoute) {
    this.types = [];
    this.HasTypeObject = false;
  }

  ngOnInit() {
    this.types = this.route.snapshot.data.types;
    console.log(this.types);
    if (this.types === null || this.types.length > 0) {
      this.HasTypeObject = true;
    }
  }

}
