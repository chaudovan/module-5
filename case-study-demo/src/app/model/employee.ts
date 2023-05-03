import {Division} from './division';
import {Education} from './education';
import {Position} from './Position';

export interface Employee {
  id: string;
  name: string;
  dateOfBirth: string;
  idCard: string;
  salary: number;
  phone: string;
  email: string;
  address: string;
  position: Position;
  division: Division;
  education: Education;
}
