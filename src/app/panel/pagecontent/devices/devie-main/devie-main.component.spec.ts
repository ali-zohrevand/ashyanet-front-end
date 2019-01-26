import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevieMainComponent } from './devie-main.component';

describe('DevieMainComponent', () => {
  let component: DevieMainComponent;
  let fixture: ComponentFixture<DevieMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevieMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevieMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
