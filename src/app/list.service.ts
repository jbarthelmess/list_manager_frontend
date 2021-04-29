import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { List } from './models/list';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  owner: string = "";
  constructor(private http: HttpClient) { }

  setOwner(newOwner: string) {
    this.owner = newOwner;
    console.log(`New owner: ${this.owner}`);
  }

  hasOwner(): boolean {
    return this.owner !== "";
  }

  getLists(): Observable<List> {
    return this.http.get<List>(`http://localhost:8080/lists/${this.owner}`);
  }
}
