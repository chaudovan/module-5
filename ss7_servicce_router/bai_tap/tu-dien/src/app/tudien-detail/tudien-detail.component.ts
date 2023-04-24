import {Component, OnInit} from '@angular/core';
import {TudienService} from '../service/tudien.service';
import {IWord} from '../iword';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-tudien-detail',
  templateUrl: './tudien-detail.component.html',
  styleUrls: ['./tudien-detail.component.css']
})
export class TudienDetailComponent implements OnInit {
  word: IWord;

  constructor(private tudien: TudienService,
              private activateRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe(paramMap => {
      const key = +paramMap.get('id');
      this.word = this.tudien.findById(key);
    });
  }
}
