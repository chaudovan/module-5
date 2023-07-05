import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {Division} from '../../model/division';
import {Position} from '../../model/Position';
import {Education} from '../../model/education';
import {EmployeeService} from '../../service/employee/employee.service';
import {DivisionService} from '../../service/employee/division.service';
import {EducationService} from '../../service/employee/education.service';
import {PositionService} from '../../service/employee/position.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {
  rfCreate: FormGroup;
  listPositon: Position[];
  listDivison: Division[];
  listEducation: Education[];

  constructor(private employeeService: EmployeeService,
              private divisionService: DivisionService,
              private educationService: EducationService,
              private positionService: PositionService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.divisionService.findAll().subscribe(next => {
      this.listDivison = next;
    });
    this.educationService.findAll().subscribe(next => {
      this.listEducation = next;
    });
    this.positionService.findAll().subscribe(next => {
      this.listPositon = next;
    });
    this.rfCreate = new FormGroup({
      id: new FormControl('', [Validators.required, Validators.pattern(/^NV-\d{4}$/)]),
      name: new FormControl('', [Validators.required]),
      dateOfBirth: new FormControl('', [Validators.required, this.checkAge]),
      idCard: new FormControl('', [Validators.required, Validators.pattern(/^(\d{9}|\d{12})$/)]),
      salary: new FormControl('', [Validators.required, this.checkSalary]),
      phone: new FormControl('', [Validators.required, Validators.pattern(/^(090|091|(\(84\)\+90|\(84\)\+91))\d{7}$/)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      address: new FormControl('', [Validators.required]),
      position: new FormControl('', [Validators.required]),
      education: new FormControl('', [Validators.required]),
      division: new FormControl('', [Validators.required])
    });
  }

  checkAge(control: AbstractControl) {
    const date = new Date();
    const dateOfBirth = new Date(control.value);
    const age = date.getFullYear() - dateOfBirth.getFullYear();
    if (age < 18) {
      return {ageError: true};
    }
    return null;
  }

  checkSalary(control: AbstractControl) {
    const salary = control.value;
    if (salary < 0) {
      return {salaryError: true};
    }
    return null;
  }

  save() {
    const employee = this.rfCreate.value;
    this.employeeService.findById(employee.id).subscribe(next => {
      this.router.navigateByUrl('/employee/create');
      alert('ID ĐÃ TỒN TẠI');
    });
    this.employeeService.save(this.rfCreate.value).subscribe( next => {
      this.router.navigateByUrl('/employee');
      alert('Thêm thành công');
    });
  }
}
