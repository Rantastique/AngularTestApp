import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {MatSnackBar} from '@angular/material/snack-bar';

const API_GET_URL = 'https://my.api.mockaroo.com/persondata.json?key=9c5444b0';
const API_POST_URL = 'dummy_url';

export interface Person {
  id: number;
  first_name: string;
  last_name: string;
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
    first_name: 'Teddi',
    last_name: 'Dunning',
    email: 'tdunning0@spiegel.de',
    catchphrase: 'Progressive incremental intranet'
  }, {
    id: 2,
    first_name: 'Davin',
    last_name: 'Maycey',
    email: 'dmaycey1@census.gov',
    catchphrase: 'Sharable actuating alliance'
  }, {
    id: 3,
    first_name: 'Obidiah',
    last_name: 'Coules',
    email: 'ocoules2@alexa.com',
    catchphrase: 'Front-line asynchronous benchmark'
  }, {
    id: 4,
    first_name: 'Theodosia',
    last_name: 'Sandison',
    email: 'tsandison3@pagesperso-orange.fr',
    catchphrase: 'Exclusive next generation challenge'
  }, {
    id: 5,
    first_name: 'Ginevra',
    last_name: 'Garnall',
    email: 'ggarnall4@kickstarter.com',
    catchphrase: 'Streamlined heuristic paradigm'
  }, {
    id: 6,
    first_name: 'Che',
    last_name: 'Nijssen',
    email: 'cnijssen5@newsvine.com',
    catchphrase: 'Cloned intermediate synergy'
  }, {
    id: 7,
    first_name: 'Matthus',
    last_name: 'Bansal',
    email: 'mbansal6@shareasale.com',
    catchphrase: 'Future-proofed neutral migration'
  }, {
    id: 8,
    first_name: 'Averil',
    last_name: 'Steinham',
    email: 'asteinham7@harvard.edu',
    catchphrase: 'Profit-focused 24/7 complexity'
  }, {
    id: 9,
    first_name: 'Katrinka',
    last_name: 'Bezants',
    email: 'kbezants8@walmart.com',
    catchphrase: 'Focused asynchronous archive'
  }, {
    id: 10,
    first_name: 'Blair',
    last_name: 'Berr',
    email: 'bberr9@discovery.com',
    catchphrase: 'Secured system-worthy definition'
  }];
