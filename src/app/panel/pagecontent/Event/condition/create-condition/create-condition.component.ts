import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Condition} from '../../../../../models/Event/condition';
import {EventService} from '../../../../../models/Event/event.service';

@Component({
  selector: 'app-create-condition',
  templateUrl: './create-condition.component.html',
  styleUrls: ['./create-condition.component.css']
})
export class CreateConditionComponent implements OnInit {
  condition: Condition;
  firsrAttr: any;
  secondAttr: any;
  inpuType: string;
  inpuTypeJson: string;
  constructor(private eventServices: EventService) { }

  ngOnInit() {
    this.condition = new Condition();
    this.condition = this.eventServices.getCondition();
  }


  setCondition() {
    this.eventServices.setCondition(this.condition);
  }
}
