import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) {
  }

  findAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>('http://localhost:3000/products');
  }

  save(product: Product): Observable<Product> {
    return this.httpClient.post<Product>('http://localhost:3000/products', product);
  }
  findById(id: number): Observable<Product> {
    return this.httpClient.get<Product>('http://localhost:3000/products/' + id);
  }
  delete(id: number): Observable<Product> {
    return this.httpClient.delete<Product>('http://localhost:3000/products/' + id);
  }
}
