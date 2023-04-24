import {Injectable} from '@angular/core';
import {Product} from '../product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productList: Product[] = [
    {
      id: 1,
      name: 'Iphone 13',
      price: 1300,
      description: 'New'
    },
    {
      id: 2,
      name: 'Iphone 13 pro',
      price: 1400,
      description: 'Like New 99%'
    },
    {
      id: 3,
      name: 'Iphone 14',
      price: 1500,
      description: 'New'
    },
    {
      id: 4,
      name: 'Iphone 14 pro max',
      price: 2000,
      description: 'Like New'
    },
  ];

  constructor() {
  }

  findAll(): Product[] {
    return this.productList;
  }

  save(product: Product): void {
    this.productList.push({...product, id: this.productList.length + 1});
  }

  findById(id: number): Product {
    return this.productList.filter(product => product.id === id)[0];
  }

  updateProduct(id: number, product: Product): void {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.productList.length; i++) {
      if (this.productList[i].id === id) {
        this.productList[i].name = product.name;
        this.productList[i].price = product.price;
        this.productList[i].description = product.description;
      }
    }
  }

  delete(id: number) {
    this.productList = this.productList.filter(product => {
      return product.id !== id;
    });
  }
}
