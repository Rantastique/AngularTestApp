import { Component, OnInit } from '@angular/core';
import {PersonDataService} from '../person-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  dataCount = 0;

  constructor(private personNameService: PersonDataService) { }

  ngOnInit(): void {
    this.dataCount = this.personNameService.getNumberOfPersons();
  }

}
