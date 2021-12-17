import {Component, OnDestroy, EventEmitter, OnInit, HostListener} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {decrement, increment, reset} from '../store/counter/counter.actions';
import {CounterState} from '../store/counter/counter.state';
import {AppState} from '../store/AppState';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit, OnDestroy {

  $value!: Observable<any>;
  $out = new EventEmitter<string>()

  constructor(private store: Store<AppState>) { }

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

  @HostListener('click')
  callParent(){
    this.$out.emit('Hello')
  }

  ngOnDestroy(): void {
    console.log('Bye bye')
  }
}
