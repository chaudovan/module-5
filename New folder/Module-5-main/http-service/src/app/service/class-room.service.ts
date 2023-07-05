import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ClassRoom} from '../model/class-room';
import {Student} from '../model/student';

@Injectable({
  providedIn: 'root'
})

export class ClassService {
  private URL_CLASS = 'http://localhost:3000/classroom/';

  constructor(private httpClient: HttpClient) {
  }

  getAllCLass(): Observable<ClassRoom[]> {
    return this.httpClient.get<ClassRoom[]>(this.URL_CLASS);
  }

  findById(id: number): Observable<Student> {
    return this.httpClient.get<Student>(this.URL_CLASS + id);
  }
}
