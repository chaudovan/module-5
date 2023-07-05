import {Component, OnInit} from '@angular/core';
import {MedicalService} from '../../service/medical.service';
import {PatientService} from '../../service/patient.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Patient} from '../../model/patient';
import {Router} from '@angular/router';

@Component({
  selector: 'app-medical-create',
  templateUrl: './medical-create.component.html',
  styleUrls: ['./medical-create.component.css']
})
export class MedicalCreateComponent implements OnInit {
  patientList: Patient[];

  medicalForm: FormGroup = new FormGroup({
    medicalCode: new FormControl(''),
    patient: new FormControl(''),
    patientName: new FormControl(''),
    startDay: new FormControl(''),
    endDay: new FormControl(''),
    reason: new FormControl(''),
    treatments: new FormControl(''),
    doctor: new FormControl(''),

  });

  constructor(private medicalService: MedicalService,
              private patientService: PatientService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    return this.patientService.getAll().subscribe( patient => {
      this.patientList = patient;
    });
  }

  submit(): void {
    const medical = this.medicalForm.value;
    this.medicalService.saveMedical(medical).subscribe(() => {
      alert('Tạo thành công');
      this.router.navigateByUrl('/medical-list');
      this.medicalForm.reset();
    }, e => console.log(e));
    // });
  }
}
