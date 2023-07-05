import {Patient} from './patient';

export interface Medical {
  id?: number;
  medicalCode?: string;
  patient?: Patient;
  patientName?: string;
  startDay?: string;
  endDay?: string;
  reason?: string;
  treatments?: string;
  doctor?: string;
}
