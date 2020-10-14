import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttentionBySubCentersComponent } from './attention-by-sub-centers.component';

describe('AttentionBySubCentersComponent', () => {
  let component: AttentionBySubCentersComponent;
  let fixture: ComponentFixture<AttentionBySubCentersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttentionBySubCentersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttentionBySubCentersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
