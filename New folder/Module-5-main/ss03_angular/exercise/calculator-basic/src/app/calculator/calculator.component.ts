import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  num1: number;
  num2: number;
  num3: number;
  error = '';
  constructor() {
  }

  ngOnInit(): void {
  }

  change(s: string) {
    switch (s) {
      case '+':
        this.num3 = this.num1 + this.num2;
        return this.error = '';
      case '-' :
        this.num3 = this.num1 - this.num2;
        return this.error = '';
      case '*' :
        this.num3 = this.num1 * this.num2;
        return this.error = '';
      case '/' :
        if (this.num2 === 0) {
          return this.error = 'Error';
        } else {
          this.num3 = this.num1 / this.num2;
          return this.error = '';
        }
    }
  }

}
