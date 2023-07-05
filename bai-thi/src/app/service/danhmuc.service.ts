import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Huong} from '../model/huong';
import {DanhMuc} from '../model/danh-muc';

@Injectable({
  providedIn: 'root'
})
export class DanhmucService {

  constructor(private httpClient: HttpClient) { }
  findAll(): Observable<DanhMuc[]> {
    return this.httpClient.get<DanhMuc[]>(' http://localhost:3000/danhMucs');
  }

  findById(id: number): Observable<DanhMuc> {
    return this.httpClient.get<DanhMuc>(' http://localhost:3000/danhMucs/' + id);
  }
}
