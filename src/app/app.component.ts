import {Component, OnInit} from '@angular/core';
import {PersonDataService} from './person-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(private personDataService: PersonDataService) {
  }

  ngOnInit(): void {
    this.personDataService.fetchPersonData();
  }
}
