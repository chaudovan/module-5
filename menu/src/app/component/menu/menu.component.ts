import {Component, OnInit} from '@angular/core';
import {Loai} from '../../model/loai';
import {Mon} from '../../model/mon';
import {Order} from '../../model/order';
import {MenuService} from '../../service/menu.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  loaiList: Loai[] = [];
  monList: Mon[] = [];
  orderList: Order[] = [];
  sum: number;
  monChon: Mon;
  soLuong = 0;
  tongTien = 0;
  rfCreate: FormGroup;

  constructor(private menuService: MenuService) {
  }

  ngOnInit(): void {
    this.monList = this.menuService.findAllMon();
    this.loaiList = this.menuService.findAllLoai();
  }

  chon(mon: Mon) {
    this.monChon = mon;
    this.rfCreate = new FormGroup({
      ten: new FormControl(this.monChon.ten),
      soLuong: new FormControl(''),
      gia: new FormControl(this.monChon.gia),
      tongTien: new FormControl('')
    });
  }

  them() {
    this.tongTien = 0;
    const order = this.rfCreate.value;
    order.tongTien = order.soLuong * order.gia;
    this.orderList.push(order);
    this.orderList.forEach(orders => this.tongTien += orders.tongTien);
    this.soLuong = 0;
    console.log(this.orderList);
  }

  sreach(id: number) {
    this.monList = this.monList.filter(mon => mon.loai.id === id);
    console.log(this.monList);
    // this.ngOnInit();
  }
}
