import {Injectable} from '@angular/core';
import {Customer} from '../model/customer';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  // (Diamond, Platinium, Gold, Silver, Member).
  // listCustomer: Customer[] = [
  //   {
  //     id: 'KH-0001',
  //     cusName: 'Nguyễn Văn A',
  //     dateOfBirth: '1995-02-22',
  //     gender: 1,
  //     idCard: '0010020034',
  //     phone: '0905010203',
  //     email: 'nguyenvana@gmaio.com',
  //     address: 'Đà Nẵng',
  //     customerType: {
  //       id: 1,
  //       name: 'Diamond'
  //     }
  //   },
  //   {
  //     id: 'KH-0002',
  //     cusName: 'Nguyễn Văn B',
  //     dateOfBirth: '2000-03-23',
  //     gender: 0,
  //     idCard: '0010020035',
  //     phone: '0905010204',
  //     email: 'nguyenvanb@gmaio.com',
  //     address: 'Sài Gòn',
  //     customerType: {
  //       id: 2,
  //       name: 'Platinium'
  //     }
  //   },
  //   {
  //     id: 'KH-0003',
  //     cusName: 'Nguyễn Văn c',
  //     dateOfBirth: '2001-02-22',
  //     gender: 1,
  //     idCard: '0010020036',
  //     phone: '0905010205',
  //     email: 'nguyenvanc@gmaio.com',
  //     address: 'Hà Nội',
  //     customerType: {
  //       id: 3,
  //       name: 'Gold'
  //     }
  //   }
  // ];

  constructor(private httpClient: HttpClient) {
  }

  findAll(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>('http://localhost:3000/customers');
  }

  findById(id: string): Observable<Customer> {
    return this.httpClient.get<Customer>('http://localhost:3000/customers/' + id);
  }

  save(customer: Customer): Observable<Customer> {
    return this.httpClient.post<Customer>('http://localhost:3000/customers', customer);
  }

  updateCus(id: string, customer: Customer): Observable<Customer> {
    return this.httpClient.put<Customer>(' http://localhost:3000/customers/' + id, customer);
  }

  deleteCus(id: string): Observable<Customer> {
    return this.httpClient.delete<Customer>('http://localhost:3000/customers/' + id);
  }

  search(name: string, idCusType: string, dayStar: string, dayEnd: string): Observable<Customer[]> {
    let url = 'http://localhost:3000/customers?cusName_like=' + name;
    if (idCusType) {
      url += '&customerType.id=' + idCusType;
    }
    if (dayStar !== '') {
      url += '&dateOfBirth_gte=' + dayStar;
    }
    if (dayEnd !== '') {
      url += '&dateOfBirth_lte=' + dayEnd;
    }
    return this.httpClient.get<Customer[]>(url);
  }
}
