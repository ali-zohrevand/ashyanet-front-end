import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class SweetAlert2Service {

  constructor() { }
  simpleAlert(message: string) {
    Swal.fire(message);
  }
  // export type SweetAlertType = 'success' | 'error' | 'warning' | 'info' | 'question';
  errorAlert(title: string, body: string) {
    Swal.fire({
      type: 'error',
      title: title,
      text: body,
    });
  }
  successAlert(title: string, body: string) {
    Swal.fire({
      type: 'success',
      title: title,
      text: body,
    });
  }
  infoAlert(title: string, body: string) {
    Swal.fire({
      type: 'info',
      title: title,
      text: body,
    });
  }
}
