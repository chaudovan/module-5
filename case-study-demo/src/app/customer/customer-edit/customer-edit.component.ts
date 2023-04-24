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
  cusType: CustomerType;
  customer: Customer;
  constructor(private customerService: CustomerService,
              private customerTypeService: CustomerTypeService,
              private activateRouter: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.cusTypeList = this.customerTypeService.findAll();
    this.activateRouter.paramMap.subscribe(paramMap => {
      this.id = paramMap.get('id');
      this.customer = this.customerService.findById(this.id);
      this.cusType = this.customer.customerType;
      this.rfEdit = new FormGroup({
        id: new FormControl(this.customer.id, [Validators.required, Validators.pattern(/^KH-\d{4}$/)]),
        cusName: new FormControl(this.customer.cusName, [Validators.required]),
        dateOfBirth: new FormControl(this.customer.dateOfBirth, [Validators.required, this.checkAge]),
        gender: new FormControl(this.customer.gender, [Validators.required]),
        idCard: new FormControl(this.customer.idCard, [Validators.required, Validators.pattern(/^(\d{9}|\d{12})$/)]),
        phone: new FormControl(this.customer.phone, [Validators.required, Validators.pattern(/^(090|091|(\(84\)\+90|\(84\)\+91))\d{7}$/)]),
        email: new FormControl(this.customer.email, [Validators.required, Validators.email]),
        address: new FormControl(this.customer.address, [Validators.required]),
        customerType: new FormControl(this.customer.customerType.id, [Validators.required])
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
    const customerEdit = this.rfEdit.value;
    const id = +customerEdit.customerType;
    console.log(id);
    this.cusType = this.customerTypeService.findById(id);
    customerEdit.customerType = {
      id: this.cusType.id,
      name: this.cusType.name
    };
    this.customerService.updateCus(customerEdit);
    this.router.navigateByUrl('/customer');
  }
}
