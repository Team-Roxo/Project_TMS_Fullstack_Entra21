import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipQtComponent } from './ship-qt.component';

describe('ShipQtComponent', () => {
  let component: ShipQtComponent;
  let fixture: ComponentFixture<ShipQtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShipQtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShipQtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
