import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {EmployeeService} from '../../service/employee/employee.service';
import {DivisionService} from '../../service/employee/division.service';
import {EducationService} from '../../service/employee/education.service';
import {PositionService} from '../../service/employee/position.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Position} from '../../model/position';
import {Division} from '../../model/division';
import {Education} from '../../model/education';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {
  rfEdit: FormGroup;
  id: string;
  listPositon: Position[];
  listDivison: Division[];
  listEducation: Education[];

  constructor(private employeeService: EmployeeService,
              private divisionService: DivisionService,
              private educationService: EducationService,
              private positionService: PositionService,
              private activateRouter: ActivatedRoute,
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
    this.activateRouter.paramMap.subscribe(paramMap => {
      this.id = paramMap.get('id');
      this.employeeService.findById(this.id).subscribe(employee => {
        this.rfEdit = new FormGroup({
          id: new FormControl(employee.id, [Validators.required, Validators.pattern(/^NV-\d{4}$/)]),
          name: new FormControl(employee.name, [Validators.required]),
          dateOfBirth: new FormControl(employee.dateOfBirth, [Validators.required, this.checkAge]),
          idCard: new FormControl(employee.idCard, [Validators.required, Validators.pattern(/^(\d{9}|\d{12})$/)]),
          salary: new FormControl(employee.salary, [Validators.required, this.checkSalary]),
          phone: new FormControl(employee.phone, [Validators.required, Validators.pattern(/^(090|091|(\(84\)\+90|\(84\)\+91))\d{7}$/)]),
          email: new FormControl(employee.email, [Validators.required, Validators.email]),
          address: new FormControl(employee.address, [Validators.required]),
          position: new FormControl(this.listPositon.filter(item => item.id === employee.position.id)[0], [Validators.required]),
          education: new FormControl(this.listEducation.filter(item => item.id === employee.education.id)[0], [Validators.required]),
          division: new FormControl(this.listDivison.filter(item => item.id === employee.division.id)[0], [Validators.required])
        });
      });
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

  update() {
    this.employeeService.updateEmployee(this.id, this.rfEdit.value).subscribe(next => {
      this.router.navigateByUrl('/employee');
      alert('Sửa thành công');
    });
  }
}
