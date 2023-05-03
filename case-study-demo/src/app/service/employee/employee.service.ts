import {Injectable} from '@angular/core';
import {Employee} from '../../model/employee';
import {Position} from '../../model/Position';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  // employeeList: Employee[] = [
  //   {
  //     id: 'NV-0001',
  //     name: 'Nguyễn Ngọc A',
  //     dateOfBirth: '2000-02-22',
  //     idCard: '001222333',
  //     salary: 20000000,
  //     phone: '0905050505',
  //     email: 'nguyenngoca@gmail.com',
  //     address: 'Ninh Thuận',
  //     position: {
  //       id: 1,
  //       name: 'Lễ Tân'
  //     },
  //     division: {
  //       id: 3,
  //       name: 'Phục vụ'
  //     },
  //     education: {
  //       id: 1,
  //       name: 'Trung cấp'
  //     }
  //   },
  //   {
  //     id: 'NV-0002',
  //     name: 'Nguyễn Ngọc B',
  //     dateOfBirth: '2000-05-22',
  //     idCard: '111222333',
  //     salary: 25000000,
  //     phone: '0905060606',
  //     email: 'nguyenngocb@gmail.com',
  //     address: 'Bình Thuận',
  //     position: {
  //       id: 4,
  //       name: 'Giám sát'
  //     },
  //     division: {
  //       id: 2,
  //       name: 'Hành chính'
  //     },
  //     education: {
  //       id: 2,
  //       name: 'Cao đẳng'
  //     }
  //   },
  //   {
  //     id: 'NV-0003',
  //     name: 'Nguyễn Ngọc C',
  //     dateOfBirth: '2000-04-22',
  //     idCard: '221222333',
  //     salary: 30000000,
  //     phone: '0905070707',
  //     email: 'nguyenngocc@gmail.com',
  //     address: 'Châu Đốc',
  //     position: {
  //       id: 5,
  //       name: 'Quản lý'
  //     },
  //     division: {
  //       id: 1,
  //       name: 'Sale-Marketing'
  //     },
  //     education: {
  //       id: 3,
  //       name: 'Đại học'
  //     }
  //   },
  //   {
  //     id: 'NV-0001',
  //     name: 'Nguyễn Ngọc A',
  //     dateOfBirth: '2000-02-22',
  //     idCard: '001222333',
  //     salary: 20000000,
  //     phone: '0905050505',
  //     email: 'nguyenngoca@gmail.com',
  //     address: 'Ninh Thuận',
  //     position: {
  //       id: 6,
  //       name: 'Giám đốc'
  //     },
  //     division: {
  //       id: 2,
  //       name: 'Hành chính'
  //     },
  //     education: {
  //       id: 4,
  //       name: 'Sau đại học'
  //     }
  //   }
  // ];
  constructor(private httpClient: HttpClient) {
  }

  findAll(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>('http://localhost:3000/employees');
  }

  findById(id: string): Observable<Employee> {
    return this.httpClient.get<Employee>('http://localhost:3000/employees/' + id);
  }

  save(employee: Employee): Observable<Employee> {
    return this.httpClient.post<Employee>('http://localhost:3000/employees', employee);
  }

  updateEmployee(id: string, employee: Employee): Observable<Employee> {
    return this.httpClient.put<Employee>('http://localhost:3000/employees/' + id, employee);
  }

  deleteEmployee(id: string): Observable<Employee> {
    return this.httpClient.delete<Employee>('http://localhost:3000/employees/' + id);
  }
}
