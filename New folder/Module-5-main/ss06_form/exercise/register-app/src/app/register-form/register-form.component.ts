import {Component, OnInit} from '@angular/core';
import {User} from '../user';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  userList: User[] = [];
  userForm: FormGroup;

  constructor() {
    this.userForm = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required, Validators.minLength(6)]),
        confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
        country: new FormControl('', [Validators.required]),
        age: new FormControl('', [Validators.required, Validators.min(18)]),
        gender: new FormControl('', [Validators.required]),
        phone: new FormControl('', [Validators.required, Validators.pattern(/^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/)])
      }, [this.validatePassword]
    );
  }8

  ngOnInit(): void {
  }

  validatePassword(obj: AbstractControl) {
    const password = obj.get('password').value;
    const confirmPassword = obj.get('confirmPassword').value;
    if (confirmPassword !== password) {
      return {passValid: true};
    } else {
      return null;
    }
  }

  createUser() {
    console.log(this.userForm);
    if (this.userForm.valid) {
      this.userList.push(this.userForm.value);
    }
  }
}
