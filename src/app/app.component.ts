import { Component } from '@angular/core';
import {EventService} from './models/Event/event.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [EventService]
})
export class AppComponent {
  title = 'ashyanet';
}
