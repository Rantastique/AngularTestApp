import { Component, OnInit } from '@angular/core';
/*
just get some dummy data for now
 */
export interface Person {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  catchphrase: string;
}

const PERSON_DATA: Person[] = [
  {
    id: 1,
    first_name: 'Matti',
    last_name: 'Corrington',
    email: 'mcorrington0@symantec.com',
    catchphrase: 'Synergistic analyzing benchmark'
  }, {
    id: 2,
    first_name: 'Agneta',
    last_name: 'Feeney',
    email: 'afeeney1@gov.uk',
    catchphrase: 'Multi-layered maximized alliance'
  }, {
    id: 3,
    first_name: 'Dalila',
    last_name: 'Regina',
    email: 'dregina2@answers.com',
    catchphrase: 'Enhanced executive algorithm'
  }, {
    id: 4,
    first_name: 'Hodge',
    last_name: 'Giacomuzzo',
    email: 'hgiacomuzzo3@lycos.com',
    catchphrase: 'Synergized asymmetric model'
  }, {
    id: 5,
    first_name: 'Zacharias',
    last_name: 'Le Grice',
    email: 'zlegrice4@sphinn.com',
    catchphrase: 'Future-proofed web-enabled protocol'
  }, {
    id: 6,
    first_name: 'Quinn',
    last_name: 'Heibel',
    email: 'qheibel5@skyrock.com',
    catchphrase: 'Realigned fault-tolerant capability'
  }, {
    id: 7,
    first_name: 'Corey',
    last_name: 'Robinett',
    email: 'crobinett6@de.vu',
    catchphrase: 'Organic multi-tasking matrix'
  }, {
    id: 8,
    first_name: 'Ameline',
    last_name: 'Scolts',
    email: 'ascolts7@china.com.cn',
    catchphrase: 'Automated modular collaboration'
  }, {
    id: 9,
    first_name: 'Jedediah',
    last_name: 'Klein',
    email: 'jklein8@odnoklassniki.ru',
    catchphrase: 'Face to face coherent framework'
  }, {
    id: 10,
    first_name: 'Karina',
    last_name: 'Dencs',
    email: 'kdencs9@narod.ru',
    catchphrase: 'Total bandwidth-monitored strategy'
  }
];

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {
  personDataSource = PERSON_DATA;
  columnsToDisplay: string[] = ['id', 'first_name', 'last_name', 'email', 'catchphrase'];

  constructor() { }

  ngOnInit(): void {
  }

}
