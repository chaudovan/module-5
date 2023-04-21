import {Component, OnInit} from '@angular/core';
import {DateUntilService} from '../service/date-until.service';

// import {DateUntilService} from './service/date-util.service';

@Component({
  selector: 'app-timelines',
  templateUrl: './timelines.component.html',
  styleUrls: ['./timelines.component.css']
})
export class TimelinesComponent implements OnInit {
  output = '';
  constructor(private dateUtilService: DateUntilService) {
  }

  ngOnInit() {
  }

  onChange(value) {
    this.output = this.dateUtilService.getDiffToNow(value);
  }
}
