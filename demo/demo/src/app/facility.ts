import {Renttype} from './renttype';
import {FacilityType} from './facility-type';

export interface Facility {
  id?: number;
  name?: string;
  area?: string;
  cost?: string;
  maxPeople?: string;
  rentType?: Renttype;
  facilityType?: FacilityType;
  standardRoom?: string;
  other?: string;
  pool?: string;
  floors?: string;
  free?: string;
  img?: string;
}
