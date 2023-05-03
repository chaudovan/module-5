import {Injectable} from '@angular/core';
import {Renttype} from '../renttype';

@Injectable({
  providedIn: 'root'
})
export class RentTypeService {
  rentTypes: Renttype[] = [
    {
      id: 1,
      name: 'Year'
    },
    {
      id: 2,
      name: 'Month'
    },
    {
      id: 3,
      name: 'Day'
    },
    {
      id: 4,
      name: 'Hour'
    },
  ];

  constructor() {
  }

  findAll(): Renttype[] {
    return this.rentTypes;
  }
  findById(id: number): Renttype {
    return this.rentTypes.filter(rentType => rentType.id === id)[0];
  }
}
