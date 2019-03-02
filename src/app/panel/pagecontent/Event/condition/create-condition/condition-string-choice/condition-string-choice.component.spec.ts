import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionStringChoiceComponent } from './condition-string-choice.component';

describe('ConditionStringChoiceComponent', () => {
  let component: ConditionStringChoiceComponent;
  let fixture: ComponentFixture<ConditionStringChoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConditionStringChoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConditionStringChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
