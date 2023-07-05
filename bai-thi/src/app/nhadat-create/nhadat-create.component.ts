import { Component, OnInit } from '@angular/core';
import {NhaDat} from '../model/nha-dat';
import {Huong} from '../model/huong';
import {VungMien} from '../model/vung-mien';
import {DanhMuc} from '../model/danh-muc';
import {NhadatService} from '../service/nhadat.service';
import {HuongService} from '../service/huong.service';
import {VungmienService} from '../service/vungmien.service';
import {DanhmucService} from '../service/danhmuc.service';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nhadat-create',
  templateUrl: './nhadat-create.component.html',
  styleUrls: ['./nhadat-create.component.css']
})
export class NhadatCreateComponent implements OnInit {
  rfCreate: FormGroup;
  listNhaDat: NhaDat[];
  listHuong: Huong[];
  listVungMien: VungMien[];
  listDanhMuc: DanhMuc[];
  constructor(private nhadatService: NhadatService,
              private huongService: HuongService,
              private vungmienService: VungmienService,
              private danhmucService: DanhmucService,
              private toastrService: ToastrService,
              private router: Router) { }

  ngOnInit(): void {
    this.huongService.findAll().subscribe(next => {
      this.listHuong = next;
    });
    this.danhmucService.findAll().subscribe(next => {
      this.listDanhMuc = next;
    });
    this.vungmienService.findAll().subscribe(next => {
      this.listVungMien = next;
    });
    this.rfCreate = new FormGroup({
      name: new FormControl(''),
      tinhTrang:  new FormControl(''),
      dangTin:  new FormControl(''),
      diaChi:  new FormControl('', [Validators.required]),
      dienTich:  new FormControl('', [Validators.required, Validators.min(20)]),
      tuaDe: new FormControl('', [Validators.required]),
      noiDung:  new FormControl('', [Validators.required]),
      gia:  new FormControl('', [Validators.required, Validators.min(100000000)]),
      hinhAnh:  new FormControl(''),
      huong:  new FormControl(''),
      danhMuc:  new FormControl(''),
      vungMien:  new FormControl(''),
    });
  }
  save() {
    const text = this.rfCreate.value;
    console.log(text.tinhTrang);
    this.nhadatService.save(this.rfCreate.value).subscribe(next => {
      this.toastrService.success('thêm mới thành công');
      this.router.navigateByUrl('/nhadat');
    });
  }
}
