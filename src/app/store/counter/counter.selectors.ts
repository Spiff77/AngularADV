import {createFeature, createFeatureSelector, createSelector} from '@ngrx/store';
import {CounterState} from './counter.state';

const getCounterState = createFeatureSelector<CounterState>('counter')

export const getCounterValue = createSelector(getCounterState, (state) => state.counter);
export const getCounterName = createSelector(getCounterState, (state) => state.name);

export const getCounterAll = createSelector(getCounterState,(state) => ({
  name: state.name,
  counter: state.counter,
}))
