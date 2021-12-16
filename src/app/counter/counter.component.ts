import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {decrement, increment, reset} from '../store/counter/counter.actions';
import {CounterState} from '../store/counter/counter.state';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  $value!: Observable<any>;

  constructor(private store: Store<CounterState>) { }

  ngOnInit(): void {
    this.$value = this.store.select('counter')
  }

  increment() {
    this.store.dispatch(increment())
  }

  decrement() {
    this.store.dispatch(decrement())
  }

  reset() {
    this.store.dispatch(reset())
  }
}
