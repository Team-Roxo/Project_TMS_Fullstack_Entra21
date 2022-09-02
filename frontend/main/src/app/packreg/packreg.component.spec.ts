import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackregComponent } from './packreg.component';

describe('PackregComponent', () => {
  let component: PackregComponent;
  let fixture: ComponentFixture<PackregComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackregComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PackregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
