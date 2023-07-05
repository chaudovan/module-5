import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownTimeAppComponent } from './countdown-time-app.component';

describe('CountdownTimeAppComponent', () => {
  let component: CountdownTimeAppComponent;
  let fixture: ComponentFixture<CountdownTimeAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountdownTimeAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountdownTimeAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
