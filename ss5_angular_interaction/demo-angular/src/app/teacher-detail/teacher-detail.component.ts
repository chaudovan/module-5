import {Component, Input, OnInit} from '@angular/core';
import {Teacher} from '../teacher';

@Component({
  selector: 'app-teacher-detail',
  templateUrl: './teacher-detail.component.html',
  styleUrls: ['./teacher-detail.component.css']
})
export class TeacherDetailComponent implements OnInit {
  @Input() teacher: Teacher;
  constructor() { }

  ngOnInit(): void {
  }

}
