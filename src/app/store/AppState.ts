import {CounterState} from './counter/counter.state';
import {UsersState} from './user/users.state';
import {counterReducer} from './counter/counter.reducer';
import {usersReducer} from './user/users.reducer';

export interface AppState {
  counter: CounterState,
  products: UsersState
}

export const appReducer = {
    counter: counterReducer,
    products: usersReducer
}

