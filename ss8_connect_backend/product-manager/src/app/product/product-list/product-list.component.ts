import {Component, OnInit} from '@angular/core';
import {Product} from '../../model/product';
import {ProductService} from '../../service/product.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList: Product[];
  idDelete: number;
  nameDelete: string;
  constructor(private productService: ProductService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.productService.findAll().subscribe(next => {
      this.productList = next;
    });
  }

  delete(id: number) {
    this.productService.delete(id).subscribe(() => {
      alert('Xóa thành công');
      this.router.navigateByUrl('product');
      this.ngOnInit();
    });
  }

  showDelete(product: Product) {
    this.idDelete = product.id;
    this.nameDelete = product.name;
  }
}
