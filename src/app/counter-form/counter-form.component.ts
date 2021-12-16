import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {customIncrement} from '../store/counter/counter.actions';
import {CounterState} from '../store/counter/counter.state';

@Component({
  selector: 'app-counter-form',
  templateUrl: './counter-form.component.html',
  styleUrls: ['./counter-form.component.css']
})
export class CounterFormComponent implements OnInit {
  value: any;

  constructor(private store: Store<CounterState>) { }

  ngOnInit(): void {
  }

  addToCounter() {
    this.store.dispatch(customIncrement({value: this.value}))
  }
}
