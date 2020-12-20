import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {SelectionModel} from '@angular/cdk/collections';
import {Person, PersonDataService} from '../person-data.service';
import {Subscription} from 'rxjs';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit, AfterViewInit, OnDestroy {
  changeSubscription!: Subscription;
  personData: Array<Person> = [];
  personDataSource: MatTableDataSource<Person>;
  columnsToDisplay: string[] = ['select', 'id', 'first_name', 'last_name', 'email', 'catchphrase'];
  selection = new SelectionModel<Person>(true, []);

  @ViewChild(MatSort) sort!: MatSort;

  constructor(private personDataService: PersonDataService, private snackbar: MatSnackBar) {
    this.personData = this.getPersonData();
    this.personDataSource = new MatTableDataSource(this.personData);
  }

  ngOnInit(): void {
    this.changeSubscription = this.personDataService.getChangeNotifier().subscribe(() => {
      this.personData = this.getPersonData();
      this.personDataSource = new MatTableDataSource(this.personData);
    });
  }

  ngAfterViewInit(): void {
    this.personDataSource.sort = this.sort;
  }

  ngOnDestroy(): void {
    this.changeSubscription.unsubscribe();
  }

  getPersonData(): Array<Person> {
    return this.personDataService.getPersonData();
  }

  sendSelectedItems(): void {
    const selection = this.selection.selected;
    this.personDataService.postSelection(selection).subscribe((res) => {
      const succesMsg = 'Daten erfolgreich gesendet';
      this.showResultSnackbar(succesMsg);
    }, (error => {
      const errorMsg = 'Etwas ist schief gegangen. Error: ' + error.message;
      this.showResultSnackbar(errorMsg);
    }));
  }

  showNumberOfSelectedItems(): void {
    const selection = this.selection.selected;
    const selNumber = selection.length;
    const msg = 'Es wurden ' + selNumber + ' Reihen ausgewählt.';
    this.snackbar.open(msg, 'OK', {
      duration: 3000
    });
  }

  showResultSnackbar(msg: string): void {
    this.snackbar.open(msg, 'OK', {
      duration: 3000
    });
  }

  // Directly taken from https://material.angular.io/components/table/overview#selection
  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected(): boolean {
    const numSelected = this.selection.selected.length;
    const numRows = this.personDataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle(): void {
    this.isAllSelected() ?
      this.selection.clear() :
      this.personDataSource.data.forEach(row => this.selection.select(row));
  }
}
