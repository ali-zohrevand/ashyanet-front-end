import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Condition} from '../../../../../../models/Event/condition';
import {EventService} from '../../../../../../models/Event/event.service';

@Component({
  selector: 'app-condition-int-choice',
  templateUrl: './condition-int-choice.component.html',
  styleUrls: ['./condition-int-choice.component.css']
})
export class ConditionIntChoiceComponent implements OnInit {
  constructor(private eventService: EventService) { }
   condition: Condition;
  firsrAttr: any;
  secondAttr: any;
  ngOnInit() {
    this.condition = new Condition();
  }

  pushAtrr() {
      if (this.firsrAttr != null) {
        this.condition.attr.push(this.firsrAttr);
      }

    if (this.secondAttr != null) {
      this.condition.attr.push(this.secondAttr);
    }
    this.eventService.setCondition(this.condition);
  }


}
