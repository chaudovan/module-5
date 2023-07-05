import {Injectable} from '@angular/core';
import {Product} from '../model/product';
import {Observable} from 'rxjs';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Product []> {
    return this.httpClient.get<Product []>('http://localhost:3000/products');
  }

  saveProduct(product): Observable<Product> {
    return this.httpClient.post<Product>('http://localhost:3000/products', product);
  }

  findById(id: number): Observable<Product> {
    return this.httpClient.get<Product>(`http://localhost:3000/products/${id}`);
  }

  updateProduct(id: number, product: Product): Observable<Product> {
    return this.httpClient.put<Product>(`http://localhost:3000/products/${id}`, product);
  }

  deleteProduct(id: number): Observable<Product> {
    return this.httpClient.delete<Product>(`http://localhost:3000/products/${id}`);
  }

}
