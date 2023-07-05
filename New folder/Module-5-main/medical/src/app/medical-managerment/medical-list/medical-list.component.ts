import {Component, OnInit} from '@angular/core';
import {Medical} from '../../model/medical';
import {PatientService} from '../../service/patient.service';
import {Patient} from '../../model/patient';
import {MedicalService} from '../../service/medical.service';

@Component({
  selector: 'app-medical-list',
  templateUrl: './medical-list.component.html',
  styleUrls: ['./medical-list.component.css']
})
export class MedicalListComponent implements OnInit {

  medicalList: Medical[] = [];
  patientList: Patient[] = [];
  id: number;
  p = 0;
  nameSearch: string;

  constructor(private medicalService: MedicalService,
              private patientService: PatientService) {
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    return this.medicalService.getAll().subscribe(medical => {
      this.medicalList = medical;
    });
    return this.patientService.getAll().subscribe(patient => {
      this.patientList = patient;
    });
  }

  showDelete(medical: Medical) {
    this.id = medical.id;
  }

  delete(id: number): void {
    this.medicalService.deleteMedical(id).subscribe(() => {
      this.getAll();
    });
  }

  search(name: string) {
    this.medicalService.findByName(name).subscribe(listSearch => {
      this.medicalList = listSearch;
    });
  }

}
