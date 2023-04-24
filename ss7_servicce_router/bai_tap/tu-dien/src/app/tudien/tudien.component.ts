import { Component, OnInit } from '@angular/core';
import {IWord} from '../iword';
import {TudienService} from '../service/tudien.service';

@Component({
  selector: 'app-tudien',
  templateUrl: './tudien.component.html',
  styleUrls: ['./tudien.component.css']
})
export class TudienComponent implements OnInit {
  iWordList: IWord[];
  constructor(private tudien: TudienService) { }

  ngOnInit(): void {
    this.iWordList = this.tudien.findAll();
  }

}
