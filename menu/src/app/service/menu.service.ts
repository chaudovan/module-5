import {Injectable} from '@angular/core';
import {Loai} from '../model/loai';
import {Mon} from '../model/mon';


@Injectable({
  providedIn: 'root'
})
export class MenuService {
  loaiList: Loai[] = [
    {
      id: 1,
      ten: 'Cà phê'
    },
    {
      id: 2,
      ten: 'Nước ngọt'
    },
    {
      id: 3,
      ten: 'Nước trái cây'
    }
  ];
  monList: Mon[] = [
    {
      id: 1,
      ten: 'Cà Phê Muối',
      gia: 15000,
      loai: {
        id: 1,
        ten: 'Cà phê'
      }
    },
    {
      id: 2,
      ten: 'Nước cà chua',
      gia: 20000,
      loai: {
        id: 3,
        ten: 'Nước trái cây'
      }
    },
    {
      id: 3,
      ten: 'Nước bí đao',
      gia: 20000,
      loai: {
        id: 3,
        ten: 'Nước trái cây'
      }
    },
    {
      id: 4,
      ten: 'Cà phê sữa',
      gia: 15000,
      loai: {
        id: 1,
        ten: 'Cà phê'
      }
    },
    {
      id: 5,
      ten: 'Cà phê đen',
      gia: 15000,
      loai: {
        id: 1,
        ten: 'Cà phê'
      }
    },
    {
      id: 6,
      ten: 'Coca Cola',
      gia: 15000,
      loai: {
        id: 2,
        ten: 'Nước ngọt'
      }
    }
  ];
  searchList: Mon[] = [];

  constructor() {
  }

  findAllMon(): Mon[] {
    return this.monList;
  }

  findAllLoai(): Loai[] {
    return this.loaiList;
  }

  findByIdLoai(id: number): Loai {
    return this.loaiList.forEach(loai => loai.id === id)[0];
  }

  // returnSearch(): void {
  //   this.searchList = [];
  // }
  // searchByIdLoai(id: number) {
  //   // for (let i = 0; i < this.monList.length; i++) {
  //   //   if (this.monList[i].loai.id === id) {
  //   //     this.searchList.push(this.monList[i]);
  //   //   }
  //   // }
  //   // return this.searchList;
  //   this.monList =  this.monList.filter(mon => mon.loai.id === id);
  // }

}

