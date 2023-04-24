import {Injectable} from '@angular/core';
import {Customer} from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  // (Diamond, Platinium, Gold, Silver, Member).
  listCustomer: Customer[] = [
    {
      id: 'KH-0001',
      cusName: 'Nguyễn Văn A',
      dateOfBirth: '1995-02-22',
      gender: 1,
      idCard: '0010020034',
      phone: '0905010203',
      email: 'nguyenvana@gmaio.com',
      address: 'Đà Nẵng',
      customerType: {
        id: 1,
        name: 'Diamond'
      }
    },
    {
      id: 'KH-0002',
      cusName: 'Nguyễn Văn B',
      dateOfBirth: '2000-03-23',
      gender: 0,
      idCard: '0010020035',
      phone: '0905010204',
      email: 'nguyenvanb@gmaio.com',
      address: 'Sài Gòn',
      customerType: {
        id: 2,
        name: 'Platinium'
      }
    },
    {
      id: 'KH-0003',
      cusName: 'Nguyễn Văn c',
      dateOfBirth: '2001-02-22',
      gender: 1,
      idCard: '0010020036',
      phone: '0905010205',
      email: 'nguyenvanc@gmaio.com',
      address: 'Hà Nội',
      customerType: {
        id: 3,
        name: 'Gold'
      }
    }
  ];

  constructor() {
  }

  findAll(): Customer[] {
    return this.listCustomer;
  }

  findById(id: string): Customer {
    // @ts-ignore
    return this.listCustomer.filter(customer => customer.id === id)[0];
  }
  save(customer: Customer): void {
    this.listCustomer.push(customer);
  }
  updateCus(customer: Customer): void {
    for (let i = 0; i < this.listCustomer.length; i++) {
      if (this.listCustomer[i].id === customer.id) {
        this.listCustomer[i] = customer;
      }
    }
  }

  deleteCus(id: string) {
    this.listCustomer = this.listCustomer.filter(customer => {
      return customer.id !== id;
    });
  }
}
