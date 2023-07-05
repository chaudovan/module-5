import {Huong} from './huong';
import {DanhMuc} from './danh-muc';
import {VungMien} from './vung-mien';

export interface NhaDat {
  id: number;
  name: string;
  tinhTrang: string;
  dangTin: string;
  diaChi: string;
  dienTich: number;
  tuaDe: string;
  noiDung: string;
  gia: number;
  hinhAnh: string;
  huong: Huong;
  danhMuc: DanhMuc;
  vungMien: VungMien;
}
