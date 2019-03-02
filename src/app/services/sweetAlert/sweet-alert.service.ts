import { Injectable } from '@angular/core';
import swal from 'sweetalert';

@Injectable({
  providedIn: 'root'
})
// ...................https://sweetalert.js.org/guides/..............
export class SweetAlertService {

  constructor() { }
  alertMessage(meesage: string) {
    swal('Are you sure you want to do this?', {
      buttons: ['Oh noez!', 'Aww yiss!'],
    });  }
  success(title: string, message: string, button: string) {

    swal({
      title: title,
      text: message,
      icon: 'success'
    });
  }
  warning(title: string, message: string) {
    swal(title, message, 'warning');

  }
  info(title: string, message: string) {
    swal(title, message, 'info');

  }
  error(title: string, message: string) {
    swal(title, message, 'error');

  }
  choos() {
}
}
