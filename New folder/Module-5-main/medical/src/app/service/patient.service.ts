import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Patient} from '../model/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Patient[]> {
    return this.http.get<Patient[]>('http://localhost:8080/api/v1/patient/list');
  }

  findById(id: number): Observable<Patient> {
    return this.http.get<Patient>(`http://localhost:8080/api/v1/patient/${id}`);
  }
}
