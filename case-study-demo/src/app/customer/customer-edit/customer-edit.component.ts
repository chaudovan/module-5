import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../../service/customer.service';
import {CustomerTypeService} from '../../service/customer-type.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CustomerType} from '../../model/customer-type';
import {Customer} from '../../model/customer';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  rfEdit: FormGroup;
  id: string;
  cusTypeList: CustomerType[];

  constructor(private customerService: CustomerService,
              private customerTypeService: CustomerTypeService,
              private activateRouter: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.customerTypeService.findAll().subscribe(next => {
      this.cusTypeList = next;
    });
    this.activateRouter.paramMap.subscribe(paramMap => {
      this.id = paramMap.get('id');
      this.customerService.findById(this.id).subscribe(customer => {
        console.log(customer.customerType.id);
        this.rfEdit = new FormGroup({
          id: new FormControl(customer.id, [Validators.required, Validators.pattern(/^KH-\d{4}$/)]),
          cusName: new FormControl(customer.cusName, [Validators.required]),
          dateOfBirth: new FormControl(customer.dateOfBirth, [Validators.required, this.checkAge]),
          gender: new FormControl(customer.gender, [Validators.required]),
          idCard: new FormControl(customer.idCard, [Validators.required, Validators.pattern(/^(\d{9}|\d{12})$/)]),
          phone: new FormControl(customer.phone, [Validators.required, Validators.pattern(/^(090|091|(\(84\)\+90|\(84\)\+91))\d{7}$/)]),
          email: new FormControl(customer.email, [Validators.required, Validators.email]),
          address: new FormControl(customer.address, [Validators.required]),
          customerType: new FormControl(customer.customerType.id, [Validators.required])
        });
      });
    });
  }

  checkAge(control: AbstractControl) {
    const date = new Date();
    const dateOfBirth = new Date(control.value);
    const age = date.getFullYear() - dateOfBirth.getFullYear();
    if (age < 18) {
      return {ageError: true};
    }
    return null;
  }

  update() {
    const customer = this.rfEdit.value;
    this.customerTypeService.findById(customer.customerType).subscribe(cusType => {
      customer.customerType = {
        id: cusType.id,
        name: cusType.name
      };
      this.customerService.updateCus(this.id, customer).subscribe(next => {
        this.router.navigateByUrl('/customer');
        alert('sửa thành công');
      });
    });
  }
}
