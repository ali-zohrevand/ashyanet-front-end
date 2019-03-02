import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabTableMaterialComponent } from './lab-table-material.component';

describe('LabTableMaterialComponent', () => {
  let component: LabTableMaterialComponent;
  let fixture: ComponentFixture<LabTableMaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabTableMaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabTableMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
