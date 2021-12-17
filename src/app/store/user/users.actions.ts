import {createAction, props} from '@ngrx/store';

const LOAD_ALL_USERS_START = '[users] Load Start'
const LOAD_ALL_USERS_SUCCESS = '[users] Load Success'

export const changeValue = createAction('changeValue')

export const loadAllUsersStart = createAction(LOAD_ALL_USERS_START)
export const loadAllUsersSuccess = createAction(LOAD_ALL_USERS_SUCCESS, props<{users: []}>());
