import {Injectable} from '@angular/core';
import {IWord} from '../iword';

@Injectable({
  providedIn: 'root'
})
export class TudienService {
  iWordList: IWord[] = [
    {
      id: 1,
      word: 'Hello',
      mean: 'Xin Chào'
    },
    {
      id: 2,
      word: 'Goodbye',
      mean: 'Tạm Biệt'
    },
    {
      id: 3,
      word: 'Good morning',
      mean: 'Chào Buổi Sáng'
    },
    {
      id: 4,
      word: 'Beautiful',
      mean: 'Xinh Đẹp'
    },
    {
      id: 5,
      word: 'Teacher',
      mean: 'Giáo Viên'
    },
  ];

  constructor() {
  }

  findAll(): IWord[] {
    return this.iWordList;
  }
  findById(id: number): IWord {
    return this.iWordList.filter(item => item.id === id)[0];
  }
}
