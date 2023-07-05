import {ClassRoom} from './class-room';

export interface Student {
  id?: number;
  name?: string;
  dayOfBirth?: string;
  address?: string;
  age?: number;
  classRoom?: ClassRoom;
}
