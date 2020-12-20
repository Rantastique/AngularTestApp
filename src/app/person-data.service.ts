import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {MatSnackBar} from '@angular/material/snack-bar';

const API_GET_URL = 'https://my.api.mockaroo.com/persondata.json?key=9c5444b0';
const API_POST_URL = 'dummy_url';

export interface Person {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  catchphrase: string;
}

@Injectable({
  providedIn: 'root'
})
export class PersonDataService {
  dataChanged = new Subject<void>();
  private personData: Array<Person> = [];

  constructor(private http: HttpClient, private snackbar: MatSnackBar) { }

  fetchPersonData(): void {
    this.http.get<Array<Person>>(API_GET_URL).subscribe((res) => {
      this.personData = res;
      this.dataChanged.next();
    }, (error => {
        this.personData = DUMMY_DATA;
        this.showDummySnackbar();
        this.dataChanged.next();
      }));
  }

  postSelection(selectedRows: Array<Person>): Observable<any> {
    return this.http.post(API_POST_URL, selectedRows);
  }

  getChangeNotifier(): Observable<void> {
    return this.dataChanged.asObservable();
  }

  getPersonData(): Array<Person> {
    return this.personData;
  }

  getNumberOfPersons(): number {
    return this.personData.length;
  }

  showDummySnackbar(): void {
    const msg = 'Es konnten keine API-Daten geladen werden. Stattdessen werden Dummy-Daten gezeigt';

    this.snackbar.open(msg, 'OK', {
      duration: 3000
    } );
  }

}

const DUMMY_DATA = [
  {
    id: 1,
    firstName: 'Teddi',
    lastName: 'Dunning',
    email: 'tdunning0@spiegel.de',
    catchphrase: 'Progressive incremental intranet'
  }, {
    id: 2,
    firstName: 'Davin',
    lastName: 'Maycey',
    email: 'dmaycey1@census.gov',
    catchphrase: 'Sharable actuating alliance'
  }, {
    id: 3,
    firstName: 'Obidiah',
    lastName: 'Coules',
    email: 'ocoules2@alexa.com',
    catchphrase: 'Front-line asynchronous benchmark'
  }, {
    id: 4,
    firstName: 'Theodosia',
    lastName: 'Sandison',
    email: 'tsandison3@pagesperso-orange.fr',
    catchphrase: 'Exclusive next generation challenge'
  }, {
    id: 5,
    firstName: 'Ginevra',
    lastName: 'Garnall',
    email: 'ggarnall4@kickstarter.com',
    catchphrase: 'Streamlined heuristic paradigm'
  }, {
    id: 6,
    firstName: 'Che',
    lastName: 'Nijssen',
    email: 'cnijssen5@newsvine.com',
    catchphrase: 'Cloned intermediate synergy'
  }, {
    id: 7,
    firstName: 'Matthus',
    lastName: 'Bansal',
    email: 'mbansal6@shareasale.com',
    catchphrase: 'Future-proofed neutral migration'
  }, {
    id: 8,
    firstName: 'Averil',
    lastName: 'Steinham',
    email: 'asteinham7@harvard.edu',
    catchphrase: 'Profit-focused 24/7 complexity'
  }, {
    id: 9,
    firstName: 'Katrinka',
    lastName: 'Bezants',
    email: 'kbezants8@walmart.com',
    catchphrase: 'Focused asynchronous archive'
  }, {
    id: 10,
    firstName: 'Blair',
    lastName: 'Berr',
    email: 'bberr9@discovery.com',
    catchphrase: 'Secured system-worthy definition'
  }];
