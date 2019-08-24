import {Component, OnInit} from '@angular/core';
import {SessionService} from "../common/session.service";
import * as moment from "moment";

@Component({
  selector: 'app-layout',
  templateUrl: './full-layout.component.html',
  styleUrls: ['./full-layout.component.scss']
})
export class FullLayoutComponent implements OnInit {
  dateString: string;

  constructor(
    private sessionService: SessionService,
  ) {
  }

  ngOnInit(): void {
    this.dateString = moment().format('dddd, MMMM Do');
  }
}
