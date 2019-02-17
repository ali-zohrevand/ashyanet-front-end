import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MqttMessages} from "../../../../../models/Data/mqtt/mqtt-messages";
import {DevicesService} from "../../../../../models/device/devices.service";

@Component({
  selector: 'app-topic-sub',
  templateUrl: './topic-sub.component.html',
  styleUrls: ['./topic-sub.component.css']
})
export class TopicSubComponent implements OnInit {
  messages: MqttMessages[];
  messageAvailbale:boolean;
  constructor( private router: ActivatedRoute ) { }

  ngOnInit() {
    console.log(this.router.snapshot.data.messages);
    this.messages = this.router.snapshot.data.messages;
  if (this.messages !==null || this.messages.length>0){
    this.messageAvailbale = true;
  }
  }

}
