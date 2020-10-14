import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenceHospitalComponent } from './reference-hospital.component';

describe('ReferenceHospitalComponent', () => {
  let component: ReferenceHospitalComponent;
  let fixture: ComponentFixture<ReferenceHospitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReferenceHospitalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferenceHospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
