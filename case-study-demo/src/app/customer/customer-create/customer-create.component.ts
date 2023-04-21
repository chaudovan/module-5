import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  rfCreate: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.rfCreate = new FormGroup({
      id: new FormControl('', [Validators.required, Validators.pattern(/^KH-\d{4}$/)]),
      name: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      idCard: new FormControl('', [Validators.required, Validators.pattern(/^(\d{9}|\d{12})$/)]),
      phone: new FormControl('', [Validators.required, Validators.pattern(/^(090|091|(\(84\)\+90|\(84\)\+91))\d{7}$/)])
    });
  }

}
