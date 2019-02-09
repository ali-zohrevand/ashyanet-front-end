import {Component, OnInit} from '@angular/core';
import {Types} from '../../../../models/Types/types';
import {ApiService} from '../../../../services/API/api.service';

@Component({
  selector: 'app-type-list',
  templateUrl: './type-list.component.html',
  styleUrls: ['./type-list.component.css']
})
export class TypeListComponent implements OnInit {
  types: Types[];
  errorHapened: boolean;

  constructor(private apiServices: ApiService) {
    this.types = [];
  }

  ngOnInit() {
    this.apiServices.getApi('types').subscribe(
      (types: Types[]) => {
        this.types = types;
        console.log(this.types);
      },
      (error: Response) => {
        this.errorHapened = true;

      }
    );
  }

}
