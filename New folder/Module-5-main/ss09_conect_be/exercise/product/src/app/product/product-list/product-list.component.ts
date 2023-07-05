import {Component, OnInit} from '@angular/core';
import {ProductService} from '../product.service';
import {Product} from '../../model/product';
import {Router} from '@angular/router';
import {CategoryService} from '../../category/category.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  idDelete: number;

  constructor(private productService: ProductService,
              private categoryService: CategoryService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.productService.getAll().subscribe(products => {
      this.products = products;
    });
    // this.categoryService.getAll().subscribe(categories => {
    //   this.products = categories;
    // });
  }

  showDelete(product: Product) {
    this.idDelete = product.id;
  }

  delete(idDelete: number) {
    console.log(idDelete);
    this.productService.deleteProduct(idDelete).subscribe(() => {
      this.ngOnInit();
    }, e => {
      console.log(e);
    }
  );
  }
}
