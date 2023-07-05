import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Student} from '../model/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private URL_STUDENT = 'http://localhost:3000/student/';

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(this.URL_STUDENT);
  }

  addStudent(student): Observable<Student> {
    return this.httpClient.post<Student>(this.URL_STUDENT, student);
  }

  seach(name: string): Observable<Student[]> {
    return this.httpClient.get<Student[]>('http://localhost:3000/student?name_like=' + name);
  }

  delete(id: number): Observable<Student> {
    return this.httpClient.delete<Student>(this.URL_STUDENT + id);
  }

  findById(id: number): Observable<Student> {
    return this.httpClient.get<Student>(this.URL_STUDENT + id);
  }

  editStudent(id: number, std: string): Observable<Student> {
    return this.httpClient.put<Student>(this.URL_STUDENT + id, std);

  }
}
