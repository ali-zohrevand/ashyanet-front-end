import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MqttMessages} from '../../../../../models/Data/mqtt/mqtt-messages';
import {TimeService} from '../../../../../services/Time/time.service';
@Component({
  selector: 'app-topic-sub',
  templateUrl: './topic-sub.component.html',
  styleUrls: ['./topic-sub.component.css']
})
export class TopicSubComponent implements OnInit {
  messages: MqttMessages[];
  baseTopic: string;
  messageAvailbale: boolean;
  constructor( private router: ActivatedRoute, private time :TimeService) { }

  ngOnInit() {
    console.log(this.router.snapshot.data.messages);
    this.messages = this.router.snapshot.data.messages;
    console.log(this.messages);
  if (this.messages !== null && this.messages.length > 0) {
    this.baseTopic = this.messages[0].topic;
    console.log(this.baseTopic);
    this.messageAvailbale = true;
  }
  }

  whatTimeIsIt(time: number) {
    return this.time.whatTimeIsIt(time);
  }
}
