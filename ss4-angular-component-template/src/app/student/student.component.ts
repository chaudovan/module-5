import {Component, OnInit} from '@angular/core';
import {Student} from '../student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  student: Student = {};
  students: Student[] = [
    {
    url: 'https://thefullsnack.com/posts/game-of-life.html',
    name: 'Đỗ Văn Châu',
    scope: 8
    },
    {
      url: 'https://thefullsnack.com/posts/game-of-life.html',
      name: 'Đỗ Văn Châu 1',
      scope: 1
    },
    {
      url: 'https://thefullsnack.com/posts/game-of-life.html',
      name: 'Đỗ Văn Châu 2',
      scope: 2
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  addNewArticle() {
    this.students.push(this.student);
    this.student = {};
  }
}
