import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-topic-sub',
  templateUrl: './topic-sub.component.html',
  styleUrls: ['./topic-sub.component.css']
})
export class TopicSubComponent implements OnInit {
  constructor(private rroute: ActivatedRoute) { }
  topicBas64: string;
  topicPath: string;
  ngOnInit() {
    this.topicBas64 = this.rroute.snapshot.params['topic'];
    this.topicPath = atob(this.topicBas64);
  }

}
