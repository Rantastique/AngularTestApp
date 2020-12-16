import {Component, OnDestroy, OnInit} from '@angular/core';
import {PersonDataService} from '../person-data.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  dataCount = 0;
  changeSubscription!: Subscription;

  constructor(private personNameService: PersonDataService) { }

  ngOnInit(): void {
    this.dataCount = this.personNameService.getNumberOfPersons();
    this.changeSubscription = this.personNameService.getChangeNotifier().subscribe(() => {
      this.dataCount = this.personNameService.getNumberOfPersons();
    });
  }

  ngOnDestroy(): void {
    this.changeSubscription.unsubscribe();
  }
}
