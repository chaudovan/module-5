import {Component, OnInit} from '@angular/core';
import {StudentService} from '../service/student.service';
import {Student} from '../model/student';
import {FormControl, FormGroup} from '@angular/forms';
// @ts-ignore
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  studentList: Student[] = [];
  p: number = 1;
  formSearch: FormGroup;
  idDelete: number;
  nameDelete: string;


  // @ts-ignore
  constructor(private studentService: StudentService, private toas: ToastrService) {
  }

  ngOnInit(): void {
    this.getAll();
    this.searchForm();
  }


  private getAll() {
    this.studentService.getAll().subscribe(data => {
      this.studentList = data;

    }, error => {
    }, () => {
    });
  }


  showDelete(std: Student) {
    this.idDelete = std.id;
    this.nameDelete = std.name;
  }


  deleteStd() {
    this.studentService.delete(this.idDelete).subscribe(data => {
    }, error => {
    }, () => {
      this.ngOnInit();
      this.toas.success('Xóa thành công', 'success');
    });
  }

  private searchForm() {
    this.formSearch = new FormGroup({
      nameSearch: new FormControl(),
    });
  }

  search() {
    this.studentService.seach(this.formSearch.value.nameSearch).subscribe(data => {
      this.studentList = data;
      console.log(data);

    }, error => {
    }, () => {
    });
  }

}
