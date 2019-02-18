import {Component, OnDestroy, OnInit} from '@angular/core';
import {WebsocketService} from '../../../../../services/WebSokect/websocket.service';
import {Subject} from 'rxjs';
import {StandardMessage} from '../../../../../models/ApiMessage/standard-message';
@Component({
  selector: 'app-show-data',
  templateUrl: './show-data.component.html',
  styleUrls: ['./show-data.component.css']
})

export class ShowDataComponent implements OnInit , OnDestroy {

  constructor() {

  }

  ngOnInit() {

  }


  ngOnDestroy(): void {

  }
}
