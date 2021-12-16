import {createAction, props} from '@ngrx/store';

export const increment = createAction('Increment')
export const decrement = createAction('Decrement')
export const reset = createAction('reset')

export const customIncrement = createAction('CustomIncrement', props<{value: number}>())
