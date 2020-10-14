import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsAdministrationComponent } from './forms-administration.component';

describe('FormsAdministrationComponent', () => {
  let component: FormsAdministrationComponent;
  let fixture: ComponentFixture<FormsAdministrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsAdministrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsAdministrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
