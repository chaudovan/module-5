import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../../service/customer.service';
import {Customer} from '../../model/customer';

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
  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.customerService.findAll(this.searchName).subscribe(next => {
      this.customerList = next;
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

  search() {
    this.ngOnInit();
  }
}
