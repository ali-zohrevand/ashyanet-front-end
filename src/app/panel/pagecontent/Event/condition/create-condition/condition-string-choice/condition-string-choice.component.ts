import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {EventService} from "../../../../../../models/Event/event.service";
import {Condition} from "../../../../../../models/Event/condition";

@Component({
  selector: 'app-condition-string-choice',
  templateUrl: './condition-string-choice.component.html',
  styleUrls: ['./condition-string-choice.component.css']
})
export class ConditionStringChoiceComponent implements OnInit,  OnChanges {
  firsrAttr: any;
  condition: Condition;

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.condition = new Condition();
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (this.firsrAttr != null) {
      this.condition.attr.push(this.firsrAttr);
    }
    this.eventService.setCondition(this.condition);
  }

  pushAtrr() {
    if (this.firsrAttr != null) {
      this.condition.attr.push(this.firsrAttr);
    }
    this.eventService.setCondition(this.condition);
  }
}
