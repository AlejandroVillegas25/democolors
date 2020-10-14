import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReasonForCallComponent } from './reason-for-call.component';

describe('ReasonForCallComponent', () => {
  let component: ReasonForCallComponent;
  let fixture: ComponentFixture<ReasonForCallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReasonForCallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReasonForCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
