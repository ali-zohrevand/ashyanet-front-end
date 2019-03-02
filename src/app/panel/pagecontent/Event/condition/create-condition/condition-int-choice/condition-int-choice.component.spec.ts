import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionIntChoiceComponent } from './condition-int-choice.component';

describe('ConditionIntChoiceComponent', () => {
  let component: ConditionIntChoiceComponent;
  let fixture: ComponentFixture<ConditionIntChoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConditionIntChoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConditionIntChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
