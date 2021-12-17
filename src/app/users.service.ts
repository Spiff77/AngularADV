import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {filter, isEmpty, map, mergeAll} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  userNameExist(name: string): Observable<boolean> {
    return this.http.get<any>('https://jsonplaceholder.typicode.com/users').pipe(
      mergeAll(),
      filter(v => {
        return (v as any).username === name
      }),
      isEmpty(),
      map( v => !v)
    )

  }
  getAll(): Observable<any> {
    return this.http.get<any>('https://jsonplaceholder.typicode.com/users').pipe()
  }
}
