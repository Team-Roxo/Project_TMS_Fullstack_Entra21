import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserClientComponent } from './user-client.component';

describe('UserClientComponent', () => {
  let component: UserClientComponent;
  let fixture: ComponentFixture<UserClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
