import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {DanhMuc} from '../model/danh-muc';
import {VungMien} from '../model/vung-mien';

@Injectable({
  providedIn: 'root'
})
export class VungmienService {

  constructor(private httpClient: HttpClient) { }
  findAll(): Observable<VungMien[]> {
    return this.httpClient.get<VungMien[]>('  http://localhost:3000/vungMiens');
  }

  findById(id: number): Observable<VungMien> {
    return this.httpClient.get<VungMien>('  http://localhost:3000/vungMiens/' + id);
  }
}
