import { Component, OnInit } from '@angular/core';
import {Employee} from '../../model/employee';
import {EmployeeService} from '../../service/employee/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employeeList: Employee[];
  deleteId: string;
  deleteName: string;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.findAll().subscribe(next => {
      this.employeeList = next;
    });
  }

  showDelete(employee: Employee) {
    this.deleteId = employee.id;
    this.deleteName = employee.name;
  }

  delete(deleteId: string) {
    this.employeeService.deleteEmployee(deleteId).subscribe( next => {
      this.ngOnInit();
      alert('Xóa thành công rồi nhé');
    });
  }
}
