import {Component, OnInit} from '@angular/core';
import {DictionaryService} from "../service/dictionary.service";
import {IWord} from "../i-word";

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.css']
})
export class DictionaryComponent implements OnInit {
  wordList: IWord[] = [];

  constructor(private dictionaryService: DictionaryService) {
  }

  ngOnInit(): void {
    this.wordList = this.dictionaryService.getAll();
  }

}
