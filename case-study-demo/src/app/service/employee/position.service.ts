import {Injectable} from '@angular/core';
import {Position} from '../../model/Position';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PositionService {
  // positionList: Position[] = [
  //   {
  //     id: 1,
  //     name: 'Lễ tân'
  //   },
  //   {
  //     id: 2,
  //     name: 'Phục vụ'
  //   },
  //   {
  //     id: 3,
  //     name: 'Chuyên viên'
  //   },
  //   {
  //     id: 4,
  //     name: 'Giám sát'
  //   },
  //   {
  //     id: 5,
  //     name: 'Quản lý'
  //   },
  //   {
  //     id: 6,
  //     name: 'Giám đốc'
  //   }
  // ];

  constructor(private httpClient: HttpClient) {
  }
  findAll(): Observable<Position[]> {
    return this.httpClient.get<Position[]>('http://localhost:3000/positions');
  }
  findById(id: number): Observable<Position> {
    return this.httpClient.get<Position>('http://localhost:3000/positions/' + id);
  }
}
