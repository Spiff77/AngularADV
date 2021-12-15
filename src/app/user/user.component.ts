import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users$!: Observable<any>

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.users$ = this.http.get('http://jsonplaceholder.typicode.com/users')
  }

}
