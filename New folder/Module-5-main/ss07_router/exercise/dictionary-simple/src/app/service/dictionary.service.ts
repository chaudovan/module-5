import {Injectable} from '@angular/core';
import {IWord} from '../i-word';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  wordList: IWord[] = [];

  constructor() {
    this.wordList.push({
      word: 'hi',
      mean: 'chào'
    });
    this.wordList.push({
      word: 'book',
      mean: 'sách'
    });
    this.wordList.push({
      word: 'class',
      mean: 'lớp học'
    });
    this.wordList.push({
      word: 'one',
      mean: 'số một'
    });
    this.wordList.push({
      word: 'monday',
      mean: 'thứ hai'
    });
  }

  public getAll(): IWord[] {
    return this.wordList;
  }

  findByWord(word: string): IWord {
    for (const w of this.wordList) {
      if (w.word === word) {
        return w;
      }
    }
  }
}
