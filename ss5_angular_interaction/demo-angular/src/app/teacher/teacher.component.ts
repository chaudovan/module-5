import {Component, OnInit} from '@angular/core';
import {Teacher} from '../teacher';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
  check: boolean;
  mess = '';
  teacher: Teacher;
  teacherD: Teacher;
  teacherList: Teacher[] = [
    {
      id: 1,
      name: 'Nguyễn Văn A',
      salary: 5000000,
      vote: 5
    },
    {
      id: 2,
      name: 'Nguyễn Văn B',
      salary: 5000000,
      vote: 10
    },
    {
      id: 3,
      name: 'Nguyễn Văn C',
      salary: 5000000,
      vote: 15
    },
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  teacherDetail(teacher: Teacher) {
    this.teacherD = teacher;
  }

  addNewTeacher(teacher1: Teacher) {
    // tslint:disable-next-line:only-arrow-functions
    this.teacherList.forEach(function(item) {
      // tslint:disable-next-line:triple-equals
      if (item.id == teacher1.id) {
        return this.mess = 'Id đã tồn tại';
      }
    });
    this.teacherList.push(teacher1);
  }
}

