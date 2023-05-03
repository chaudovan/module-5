import {Injectable} from '@angular/core';
import {CustomerType} from '../model/customer-type';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerTypeService {
  // listCusType: CustomerType[];
  //   = [
  //   {
  //     id: 1,
  //     name: 'Diamond',
  //   },
  //   {
  //     id: 2,
  //     name: 'Platinium',
  //   },
  //   {
  //     id: 3,
  //     name: 'Gold',
  //   },
  //   {
  //     id: 4,
  //     name: 'Silver',
  //   },
  //   {
  //     id: 5,
  //     name: 'Member',
  //   }
  // ];

  constructor(private httpClient: HttpClient) {
  }

  findAll(): Observable<CustomerType[]> {
    return this.httpClient.get<CustomerType[]>(' http://localhost:3000/customerTypes');
  }
  findById(id: number): Observable<CustomerType> {
    return this.httpClient.get<CustomerType>(' http://localhost:3000/customerTypes/' + id);
  }
}
