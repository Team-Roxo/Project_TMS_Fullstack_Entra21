import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsightComponent } from './insight.component';

describe('InsightComponent', () => {
  let component: InsightComponent;
  let fixture: ComponentFixture<InsightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
