import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidatorFn, Validators} from '@angular/forms';


@Component({
  selector: 'app-form-dang-ky',
  templateUrl: './form-dang-ky.component.html',
  styleUrls: ['./form-dang-ky.component.css']
})
export class FormDangKyComponent implements OnInit {
  rfDangky: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
    // @ts-ignore
    this.rfDangky = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required, Validators.minLength(6)]),
        confirmPassword: new FormControl('', [Validators.required]),
        country: new FormControl('', [Validators.required]),
        age: new FormControl('', [Validators.required, Validators.min(18)]),
        gender: new FormControl('', [Validators.required]),
        phone: new FormControl('', [Validators.required, Validators.pattern(/^\+84\d{9,10}$/)])
      }, [this.checkPassword]
    );
  }

  checkPassword(control: AbstractControl) {
    const pass1 = control.get('password').value;
    const pass2 = control.get('confirmPassword').value;
    if (pass1 !== pass2) {
      return {pass: true};
    }
    return null;
  }
}
