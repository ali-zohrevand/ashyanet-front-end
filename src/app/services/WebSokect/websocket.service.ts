import { Injectable } from '@angular/core';
import {Observable, Observer, Subject} from 'rxjs';
import {StandardMessage} from "../../models/ApiMessage/standard-message";

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  ws: WebSocket;
  constructor() { }

  public subject: Subject<object>;

  public connect(url): Subject<object> {
    if (!this.subject) {
      this.subject = this.create(url);
      console.log('Successfully connected: ' + url);
    }
    return this.subject;
  }

  private create(url): Subject<object> {
    this.ws = new WebSocket(url);

    const observable = Observable.create(
      (obs: Observer<MessageEvent>) => {
        this.ws.onmessage = obs.next.bind(obs);
        this.ws.onerror = obs.error.bind(obs);
        this.ws.onclose = obs.complete.bind(obs);
        return this.ws.close.bind(this.ws);
      });
    const observer = {
      next: (data: Object) => {
        if (this.ws.readyState === WebSocket.OPEN) {
          this.ws.send(JSON.stringify(data));
        }
      }
    };
    return Subject.create(observer, observable);
  }
  public send(url: string) {
   this.ws.send('salam');
  }
  public close() {
    this.ws.close();
    this.subject = null;
  }
}


/*


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


ngOnDestroy(): void {
  this.websocketService.close();

}*/
