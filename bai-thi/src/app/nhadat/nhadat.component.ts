import {Component, OnInit} from '@angular/core';
import {NhaDat} from '../model/nha-dat';
import {Huong} from '../model/huong';
import {VungMien} from '../model/vung-mien';
import {DanhMuc} from '../model/danh-muc';
import {NhadatService} from '../service/nhadat.service';
import {HuongService} from '../service/huong.service';
import {VungmienService} from '../service/vungmien.service';
import {DanhmucService} from '../service/danhmuc.service';

@Component({
  selector: 'app-nhadat',
  templateUrl: './nhadat.component.html',
  styleUrls: ['./nhadat.component.css']
})
export class NhadatComponent implements OnInit {
  listNhaDat: NhaDat[];
  listHuong: Huong[];
  listVungMien: VungMien[];
  listDanhMuc: DanhMuc[];
  dienTich: number;
  gia1: number;

  constructor(private nhadatService: NhadatService,
              private huongService: HuongService,
              private vungmienService: VungmienService,
              private danhmucService: DanhmucService) {
  }

  ngOnInit(): void {
    this.huongService.findAll().subscribe(next => {
      this.listHuong = next;
    });
    this.nhadatService.findAll().subscribe(next => {
      this.listNhaDat = next;
    });
  }

  search(dienTich: string, gia: string, huong: string) {
    this.nhadatService.search(dienTich, gia, huong).subscribe(next => {
      this.listNhaDat = next;
    });
  }
}
