import { Injectable } from '@angular/core';
import {FacilityType} from '../facility-type';

@Injectable({
  providedIn: 'root'
})
export class FacilityTypeService {
  facilityTypes: FacilityType[] = [
      {
        id: 1,
        name: 'Villa'
      },
      {
        id: 2,
        name: 'House'
      },
      {
        id: 3,
        name: 'Room'
      }
    ];
  constructor() { }
  findAll(): FacilityType[] {
    return this.facilityTypes;
  }
  findById(id: number): FacilityType {
    return this.facilityTypes.filter(facType => facType.id === id)[0];
  }
}
