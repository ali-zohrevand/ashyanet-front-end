import {Component, OnInit, ViewChild} from '@angular/core';
import {Types} from '../../../../models/Types/types';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-type-create',
  templateUrl: './type-create.component.html',
  styleUrls: ['./type-create.component.css']
})
export class TypeCreateComponent implements OnInit {
  typeObj: Types;
  @ViewChild('createForm') createForm: NgForm;

  constructor() { }

  ngOnInit() {
  }

}
