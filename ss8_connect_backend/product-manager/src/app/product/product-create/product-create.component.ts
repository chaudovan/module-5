import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../service/product.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CategoryService} from '../../service/category.service';
import {Category} from '../../model/category';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  rfCreate: FormGroup;
  listCategory: Category[];
  constructor(private productService: ProductService,
              private categoryService: CategoryService,
              private toastrService: ToastrService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.categoryService.findAll().subscribe(next => {
      this.listCategory = next;
    });
    this.rfCreate = new FormGroup({
      name: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required])
    });
  }

  save() {
    const product = this.rfCreate.value;
    this.productService.save(product).subscribe(next => {
      this.toastrService.success('Create Done');
      this.router.navigateByUrl('/product');
    });
  }
}
