import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacktrackComponent } from './packtrack.component';

describe('PacktrackComponent', () => {
  let component: PacktrackComponent;
  let fixture: ComponentFixture<PacktrackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacktrackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PacktrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
