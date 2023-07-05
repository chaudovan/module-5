import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../../service/customer.service';
import {Customer} from '../../model/customer';
import {CustomerType} from '../../model/customer-type';
import {CustomerTypeService} from '../../service/customer-type.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customerList: Customer[];
  deleteId: string;
  deleteName: string;
  searchName = '';
  cusTypeList: CustomerType[];

  constructor(private customerService: CustomerService,
              private customerTypeService: CustomerTypeService) {
  }

  ngOnInit(): void {
    this.customerService.findAll().subscribe(next => {
      this.customerList = next;
    });
    this.customerTypeService.findAll().subscribe(next => {
      this.cusTypeList = next;
    });
  }

  showDelete(customer: Customer) {
    this.deleteId = customer.id;
    this.deleteName = customer.cusName;
  }

  delete(idDelete: string) {
    this.customerService.deleteCus(idDelete).subscribe(() => {
      this.ngOnInit();
      alert('Xóa Thành Công');
    });
  }

  search(name: string, idCusType: string, dayStar: string, dayEnd: string) {
    this.customerService.search(name, idCusType, dayStar, dayEnd).subscribe(next => {
      this.customerList = next;
    });
  }
}
