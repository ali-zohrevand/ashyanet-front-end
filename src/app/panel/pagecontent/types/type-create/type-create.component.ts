import {Component, OnInit, ViewChild} from '@angular/core';
import {Types} from '../../../../models/Types/types';
import {NgForm} from '@angular/forms';
import {TypseService} from '../../../../models/Types/typse.service';
import {StandardMessage} from '../../../../models/ApiMessage/standard-message';

@Component({
  selector: 'app-type-create',
  templateUrl: './type-create.component.html',
  styleUrls: ['./type-create.component.css']
})
export class TypeCreateComponent implements OnInit {
  typeObj: Types;
  submitStatus: boolean;
  typeIsnotEnglish: boolean;
  typeExist: boolean;
  @ViewChild('createFormTypes') createForm: NgForm;

  constructor(private typeService: TypseService) {
    this.typeObj = new Types();
    this.typeExist = false;
  }

  ngOnInit() {
    this.createForm.valueChanges.subscribe((value) => {
      this.typeIsnotEnglish = !this.IsEnglishWord(value['typeName']);
    });
  }

  creteaTypeSubmit() {
    this.typeService.postTypeObservable(this.typeObj).subscribe(
      (messgae: StandardMessage) => {
          console.log(messgae);
          if (messgae.info === 'type created') {
            this.submitStatus = true;
          }
          if (messgae.error === 'Type exist') {
            this.submitStatus = false;
            this.typeExist = true;
          }
          this.resetPage();
      }, (error1: Response) => {
            this.submitStatus = false;
            this.resetPage();
      }
    );

  }
  IsEnglishWord(topicName: string) {
    let Is = true;
    const validChar = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMOPQRSTUVWXYZ0123456789';
    if (topicName != null) {
      const address = String(topicName);
      for (let i = 0; i < address.length ; i++ ) {
        const tempChar = address.charAt(i);
        if (!validChar.includes(tempChar)) {
          Is = false;
          break;
        }
      }
      return Is;
    }
  }
  resetPage() {
    this.typeIsnotEnglish = false;
    this.submitStatus=false;
    this.createForm.onReset();

  }
}
