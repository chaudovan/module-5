import { Component, OnInit } from '@angular/core';
import {Student} from '../student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  student: Student = {
    url : 'https://medium.freecodecamp.org/the-evolution-of-async-javascript-from-callbacks-to-promises-to-async-await-e73b047f2f40',
    name : 'Đỗ Văn Châu',
    scope : 8
 };
  constructor() { }

  ngOnInit(): void {
  }

}
