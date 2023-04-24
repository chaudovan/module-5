import {Injectable} from '@angular/core';
import {CustomerType} from '../model/customer-type';

@Injectable({
  providedIn: 'root'
})
export class CustomerTypeService {
  listCusType: CustomerType[] = [
    {
      id: 1,
      name: 'Diamond',
    },
    {
      id: 2,
      name: 'Platinium',
    },
    {
      id: 3,
      name: 'Gold',
    },
    {
      id: 4,
      name: 'Silver',
    },
    {
      id: 5,
      name: 'Member',
    }
  ];

  constructor() {
  }

  findAll(): CustomerType[] {
    return this.listCusType;
  }
  findById(id: number): CustomerType {
    return this.listCusType.filter(cusType => cusType.id === id)[0];
  }
}
