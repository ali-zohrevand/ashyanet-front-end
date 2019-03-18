import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Condition} from '../../../../../models/Event/condition';
import {EventService} from '../../../../../models/Event/event.service';

@Component({
  selector: 'app-create-condition',
  templateUrl: './create-condition.component.html',
  styleUrls: ['./create-condition.component.css']
})
export class CreateConditionComponent implements OnInit, OnChanges {
  condition: Condition;
  inpuType: string;
  inpuTypeJson: string;
  @Input() reset: boolean;

  constructor(private eventServices: EventService) { }

  ngOnInit() {
    this.condition = new Condition();
    this.condition = this.eventServices.getCondition();
  }


  setCondition() {
    console.log(this.condition);
    this.eventServices.setCondition(this.condition);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.reset) {
      this.condition = new Condition();
    }
    this.inpuType = '';
    this.inpuTypeJson = '';
  }
}
