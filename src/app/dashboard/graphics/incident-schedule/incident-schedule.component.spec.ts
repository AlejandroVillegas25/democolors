import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentScheduleComponent } from './incident-schedule.component';

describe('IncidentScheduleComponent', () => {
  let component: IncidentScheduleComponent;
  let fixture: ComponentFixture<IncidentScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncidentScheduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
