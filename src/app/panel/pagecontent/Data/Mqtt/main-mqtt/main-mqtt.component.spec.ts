import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainMqttComponent } from './main-mqtt.component';

describe('MainMqttComponent', () => {
  let component: MainMqttComponent;
  let fixture: ComponentFixture<MainMqttComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainMqttComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainMqttComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
