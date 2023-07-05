import {RentType} from './rent-type';

export interface Facility {
  id: string;
  name: string;
  area: number;
  floor: number;
  maxPeople: number;
  cost: number;
  rentType: RentType;
  status: number;
}
