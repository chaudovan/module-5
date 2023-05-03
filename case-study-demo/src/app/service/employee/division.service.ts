import { Injectable } from '@angular/core';
import {Division} from '../../model/division';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DivisionService {
  // divisionList: Division[] = [
  //   {
  //     id: 1,
  //     name: 'Sale-Marketing'
  //   },
  //   {
  //     id: 2,
  //     name: 'Hành chính'
  //   },
  //   {
  //     id: 3,
  //     name: 'Phục vụ'
  //   },
  //   {
  //     id: 4,
  //     name: 'Quản lý'
  //   }
  // ];
  constructor(private httpClient: HttpClient) { }
  findAll(): Observable<Division[]> {
    return this.httpClient.get<Division[]>('http://localhost:3000/divisions');
  }
  findById(id: number): Observable<Division> {
    return this.httpClient.get<Division>(' http://localhost:3000/divisions/' + id);
  }
}
