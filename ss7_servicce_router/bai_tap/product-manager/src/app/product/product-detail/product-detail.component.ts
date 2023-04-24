import {Component, OnInit} from '@angular/core';
import {Product} from '../../product';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product;

  constructor(private productService: ProductService,
              private activateRouter: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activateRouter.paramMap.subscribe(productMap => {
      const key = +productMap.get('id');
      this.product = this.productService.findById(key);
    });
  }

}
