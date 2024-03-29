import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../../service/customer.service';
import {CustomerTypeService} from '../../service/customer-type.service';
import {Router} from '@angular/router';
import {CustomerType} from '../../model/customer-type';
import {Customer} from '../../model/customer';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  rfCreate: FormGroup;
  cusType: CustomerType;
  cusTypeList: CustomerType[];

  constructor(private customerService: CustomerService,
              private customerTypeService: CustomerTypeService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.customerTypeService.findAll().subscribe(next => {
      this.cusTypeList = next;
    });
    this.rfCreate = new FormGroup({
      id: new FormControl('', [Validators.required, Validators.pattern(/^KH-\d{4}$/)]),
      cusName: new FormControl('', [Validators.required]),
      dateOfBirth: new FormControl('', [Validators.required, this.checkAge]),
      gender: new FormControl('', [Validators.required]),
      idCard: new FormControl('', [Validators.required, Validators.pattern(/^(\d{9}|\d{12})$/)]),
      phone: new FormControl('', [Validators.required, Validators.pattern(/^(090|091|(\(84\)\+90|\(84\)\+91))\d{7}$/)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      address: new FormControl('', [Validators.required]),
      customerType: new FormControl('', [Validators.required])
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


  save() {
    const customer = this.rfCreate.value;
    this.customerService.findById(customer.id).subscribe(next => {
      this.router.navigateByUrl('/customer/create');
      alert('ID Đã Tồn tại');
    });
    this.customerService.save(this.rfCreate.value).subscribe( next => {
      this.router.navigateByUrl('/customer');
      alert('Thêm thành công');
    });
  }

}
