import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosticCauseComponent } from './diagnostic-cause.component';

describe('DiagnosticCauseComponent', () => {
  let component: DiagnosticCauseComponent;
  let fixture: ComponentFixture<DiagnosticCauseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiagnosticCauseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagnosticCauseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
