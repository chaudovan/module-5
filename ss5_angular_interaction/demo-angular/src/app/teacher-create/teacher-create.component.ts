import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Teacher} from '../teacher';

@Component({
  selector: 'app-teacher-create',
  templateUrl: './teacher-create.component.html',
  styleUrls: ['./teacher-create.component.css']
})
export class TeacherCreateComponent implements OnInit {
  @Output() onCreate = new EventEmitter<Teacher>();
  teacherC: Teacher;
  constructor() { }

  ngOnInit(): void {
  }

  craeteTeacher(id: string, name: string, salary: string) {
    this.teacherC = {
      id: +id,
      name,
      salary: +salary,
      vote: 0
    };
    this.onCreate.emit(this.teacherC);
  }
}
