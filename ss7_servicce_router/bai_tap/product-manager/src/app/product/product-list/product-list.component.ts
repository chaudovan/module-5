import {Component, OnInit} from '@angular/core';
import {Product} from '../../product';
import {ProductService} from '../../service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList: Product[];
  idDelete: number;
  nameDelete: string;

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.productList = this.productService.findAll();
  }

  showDelete(product: Product) {
    this.idDelete = product.id;
    this.nameDelete = product.name;
  }

  delete(id: number) {
    this.productService.delete(id);
    this.ngOnInit();
  }
}
