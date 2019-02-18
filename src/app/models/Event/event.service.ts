import { Injectable } from '@angular/core';
import {ApiService} from '../../services/API/api.service';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private apiService: ApiService) { }

}
