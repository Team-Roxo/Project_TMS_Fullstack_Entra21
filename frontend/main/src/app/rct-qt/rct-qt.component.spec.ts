import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RctQtComponent } from './rct-qt.component';

describe('RctQtComponent', () => {
  let component: RctQtComponent;
  let fixture: ComponentFixture<RctQtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RctQtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RctQtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
