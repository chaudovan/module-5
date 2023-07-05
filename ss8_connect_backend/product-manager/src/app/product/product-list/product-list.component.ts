import {Component, OnInit} from '@angular/core';
import {Product} from '../../model/product';
import {ProductService} from '../../service/product.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

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
              private toastrService: ToastrService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.productService.findAll().subscribe(next => {
      this.productList = next;
    });
  }

  delete(id: number) {
    this.productService.delete(id).subscribe(() => {
      this.toastrService.success('Delete Done');
      this.router.navigateByUrl('product');
      this.ngOnInit();
    });
  }

  showDelete(product: Product) {
    this.idDelete = product.id;
    this.nameDelete = product.name;
  }
}
