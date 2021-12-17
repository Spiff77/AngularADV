import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/AppState';
import {Observable} from 'rxjs';
import {getUsers} from '../../store/user/users.selectors';

@Component({
  selector: 'app-a1',
  templateUrl: './a1.component.html',
  styleUrls: ['./a1.component.css'],
})
export class A1Component implements OnInit {

  users$!: Observable<any>

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.users$ = this.store.select(getUsers);
    console.log(this.users$)
  }

}
