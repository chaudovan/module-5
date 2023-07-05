import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalEditComponent } from './medical-edit.component';

describe('MedicalEditComponent', () => {
  let component: MedicalEditComponent;
  let fixture: ComponentFixture<MedicalEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
