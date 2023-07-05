import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Medical} from '../model/medical';

@Injectable({
  providedIn: 'root'
})
export class MedicalService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Medical[]> {
    return this.http.get<Medical[]>('http://localhost:8080/api/v1/medical/list');
  }

  saveMedical(medical): Observable<Medical> {
    return this.http.post<Medical>('http://localhost:8080/api/v1/medical/create', medical);
  }

  findById(id: number): Observable<Medical> {
    return this.http.get<Medical>(`http://localhost:8080/api/v1/medical/find/${id}`);
  }

  updateMedical(id: number, medical: Medical): Observable<Medical> {
    return this.http.put<Medical>(`http://localhost:8080/api/v1/medical/update/${id}`, medical);
  }

  deleteMedical(id: number): Observable<Medical> {
    return this.http.delete<Medical>(`http://localhost:8080/api/v1/medical/delete/${id}`);
  }

  findByName(name: string): Observable<Medical> {
    return this.http.get<Medical>(`http://localhost:8080/api/v1/medical/search?name_like=${name}`);
  }
}
