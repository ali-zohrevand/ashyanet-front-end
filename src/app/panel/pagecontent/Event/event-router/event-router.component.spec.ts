import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventRouterComponent } from './event-router.component';

describe('EventRouterComponent', () => {
  let component: EventRouterComponent;
  let fixture: ComponentFixture<EventRouterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventRouterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
