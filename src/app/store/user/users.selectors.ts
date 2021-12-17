import {createFeature, createFeatureSelector, createSelector} from '@ngrx/store';
import {UsersState} from './users.state';

export const USERS_FEATURE = 'users';
const getUsersState = createFeatureSelector<UsersState>(USERS_FEATURE)

export const getUsers = createSelector(getUsersState, (state) => state.users)
