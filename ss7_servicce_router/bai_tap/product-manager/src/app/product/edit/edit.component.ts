import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  rfEdit: FormGroup;
  id: number;

  constructor(private productService: ProductService,
              private activateRouter: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.activateRouter.paramMap.subscribe(paramMap => {
      this.id = +paramMap.get('id');
      const product = this.productService.findById(this.id);
      // @ts-ignore
      this.rfEdit = new FormGroup({
        id: new FormControl(this.id),
        name: new FormControl(product.name, [Validators.required]),
        price: new FormControl(product.price, [Validators.required]),
        description: new FormControl(product.description, [Validators.required])
      });
    });
  }

  editProduct() {
    this.productService.updateProduct(this.id, this.rfEdit.value);
    this.router.navigateByUrl('/product');
  }

}
