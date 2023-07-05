import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Huong} from '../model/huong';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HuongService {
  listHuong: Huong[];

  constructor(private httpClient: HttpClient) {
  }

  findAll(): Observable<Huong[]> {
    return this.httpClient.get<Huong[]>('http://localhost:3000/huongs');
  }

  findById(id: number): Observable<Huong> {
    return this.httpClient.get<Huong>('http://localhost:3000/huongs/' + id);
  }
}
