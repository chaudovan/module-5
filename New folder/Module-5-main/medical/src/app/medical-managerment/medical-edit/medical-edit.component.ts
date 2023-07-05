import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {MedicalService} from '../../service/medical.service';
import {Patient} from '../../model/patient';
import {PatientService} from '../../service/patient.service';
import {Medical} from '../../model/medical';

@Component({
  selector: 'app-medical-edit',
  templateUrl: './medical-edit.component.html',
  styleUrls: ['./medical-edit.component.css']
})
export class MedicalEditComponent implements OnInit {
  medicalForm: FormGroup;
  id: number;
  patientList: Patient[];

  constructor(private medicalService: MedicalService,
              private patientService: PatientService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.medicalService.findById(this.id).subscribe(medical => {
        this.medicalForm = new FormGroup({
          id: new FormControl(medical.id),
          medicalCode: new FormControl(medical.medicalCode),
          patient: new FormControl(medical.patient.patientCode),
          patientName: new FormControl(medical.patientName),
          startDay: new FormControl(medical.startDay),
          endDay: new FormControl(medical.endDay),
          reason: new FormControl(medical.reason),
          treatments: new FormControl(medical.treatments),
          doctor: new FormControl(medical.doctor)
        });
      });
    });
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    return this.patientService.getAll().subscribe(patient => {
      this.patientList = patient;
    });
  }

  updateMedical() {
    const medical = this.medicalForm.value;
    // this.patientService.findById(medical.id).subscribe(patient => {
    //   medical.id = {id: patient.id, patientCode: patient.patientCode};
      this.medicalService.updateMedical(this.medicalForm.value.id, medical).subscribe(() => {
        // this.toastrService.success('Edit done');
        this.router.navigateByUrl('/medical-list');
      });
    // });
  }
}
