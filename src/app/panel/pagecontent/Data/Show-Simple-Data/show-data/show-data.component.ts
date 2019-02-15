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

  constructor(private websocketService: WebsocketService) {

  }

  ngOnInit() {
    const messageTO = new StandardMessage;
    messageTO.info = 'salam';
    const idToken = localStorage.getItem('token');
    const topic = "/salam"
    this.websocketService.connect('ws://localhost:1234/data/' + idToken+topic).asObservable().subscribe((m) => {console.log(m); });
    this.websocketService.subject.asObservable().subscribe((m) => {console.log(m); });

  }

  send() {
    this.websocketService.send('ws://localhost:1234/ws');
  }
  ngOnDestroy(): void {
    this.websocketService.close();

  }
}
