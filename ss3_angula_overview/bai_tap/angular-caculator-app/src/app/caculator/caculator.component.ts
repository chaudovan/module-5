import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-caculator',
  templateUrl: './caculator.component.html',
  styleUrls: ['./caculator.component.css']
})
export class CaculatorComponent implements OnInit {
  num1: number;
  num2: number;
  sum: number;
  error = '';
  constructor() { }

  ngOnInit(): void {
  }
  tinh(ct: string) {
    switch (ct) {
      case '+':
        this.sum = this.num1 + this.num2;
        return this.error = '';
      case '-':
        this.sum = this.num1 - this.num2;
        return this.error = '';
      case '*':
        this.sum = this.num1 * this.num2;
        return this.error = '';
      case '/':
        if (this.num2 === 0) {
          this.sum = 0;
          return this.error = 'không thể chia cho không';
        } else {
          this.sum = this.num1 / this.num2;
          return this.error = '';
        }
    }
  }
}
