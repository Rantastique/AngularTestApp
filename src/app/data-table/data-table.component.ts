import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {SelectionModel} from '@angular/cdk/collections';
import {Person, PersonDataService} from '../person-data.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit, AfterViewInit {
  personData: Array<Person> = [];
  personDataSource: MatTableDataSource<Person>;
  columnsToDisplay: string[] = ['select', 'id', 'first_name', 'last_name', 'email', 'catchphrase'];
  selection = new SelectionModel<Person>(true, []);

  @ViewChild(MatSort) sort!: MatSort;

  constructor(private personDataService: PersonDataService) {
    this.personData = this.getPersonData();
    this.personDataSource = new MatTableDataSource(this.personData);
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.personDataSource.sort = this.sort;
  }

  getPersonData(): Array<Person> {
    return this.personDataService.getPersonData();
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
