import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';

const API_URL = 'https://my.api.mockaroo.com/persondata.json?key=9c5444b0';

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

  constructor(private http: HttpClient) { }

  fetchPersonData(): void {
    this.http.get(API_URL).subscribe((res) => {
      this.personData = res as Array<Person>;
      this.dataChanged.next();
    });
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

}
