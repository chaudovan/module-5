import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {DanhMuc} from '../model/danh-muc';
import {NhaDat} from '../model/nha-dat';

@Injectable({
  providedIn: 'root'
})
export class NhadatService {

  constructor(private httpClient: HttpClient) { }
  findAll(): Observable<NhaDat[]> {
    return this.httpClient.get<NhaDat[]>('http://localhost:3000/nhaDats');
  }

  findById(id: number): Observable<NhaDat> {
    return this.httpClient.get<NhaDat>('http://localhost:3000/nhaDats/' + id);
  }
  save(nhaDat: NhaDat): Observable<NhaDat> {
    return this.httpClient.post<NhaDat>('http://localhost:3000/nhaDats', nhaDat);
  }
  search(dienTich: string, gia: string, huong: string): Observable<NhaDat[]> {
    let url = 'http://localhost:3000/nhaDats?dienTich_like=' + dienTich;
    if (gia) {
      url += '&gia_like=' + gia;
    }
    if (huong !== '') {
      url += '&huong.id=' + huong;
    }
    return this.httpClient.get<NhaDat[]>(url);
  }
}
