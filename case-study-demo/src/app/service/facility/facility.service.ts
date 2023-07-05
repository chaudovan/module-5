import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Facility} from '../../model/facility';

@Injectable({
  providedIn: 'root'
})
export class FacilityService {

  constructor(private httpClient: HttpClient) {
  }

  findAll(): Observable<Facility[]> {
    return this.httpClient.get<Facility[]>('http://localhost:3000/facility');
  }

  findById(id: string): Observable<Facility> {
    return this.httpClient.get<Facility>('http://localhost:3000/facility/' + id);
  }

  save(facility: Facility): Observable<Facility> {
    return this.httpClient.post<Facility>('http://localhost:3000/facility', facility);
  }

  editFacility(id: string, facility: Facility): Observable<Facility> {
    return this.httpClient.put<Facility>('http://localhost:3000/facility/' + id, facility);
  }
  deleteFacility(id: string): Observable<Facility> {
    return this.httpClient.delete<Facility>('http://localhost:3000/facility/' + id);
  }
}
