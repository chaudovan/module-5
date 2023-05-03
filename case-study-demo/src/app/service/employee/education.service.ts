import { Injectable } from '@angular/core';
import {Education} from '../../model/education';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EducationService {
  // educationList: Education[] = [
  //   {
  //     id: 1,
  //     name: 'Trung cấp'
  //   },
  //   {
  //     id: 2,
  //     name: 'Cao đẳng'
  //   },
  //   {
  //     id: 3,
  //     name: 'Đại học'
  //   },
  //   {
  //     id: 4,
  //     name: 'Sau đại học'
  //   }
  // ];
  constructor(private httpClient: HttpClient) { }
  findAll(): Observable<Education[]> {
    return this.httpClient.get<Education[]>('http://localhost:3000/educations');
  }
  findById(id: number): Observable<Education> {
    return this.httpClient.get<Education>('http://localhost:3000/educations/' + id);
  }
}
