import {CustomerType} from './customer-type';

export interface Customer {
  id: string;
  cusName: string;
  dateOfBirth: string;
  gender: number;
  idCard: string;
  phone: string;
  email: string;
  address: string;
  customerType: CustomerType;
}
