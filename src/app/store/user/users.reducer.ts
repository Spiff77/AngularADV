import {Action, createReducer, on} from '@ngrx/store';
import {initialState} from './users.state';
import {changeValue, loadAllUsersSuccess} from './users.actions';

const usersReducer$ = createReducer(initialState,
  on(changeValue, (state) => {
    return {
      ...state,
      users: []
    }
  }),
  on(loadAllUsersSuccess, (state, users) => {
    return users
  })
);


export function usersReducer(state: any, action: Action): any {
  return usersReducer$(state, action)
}
