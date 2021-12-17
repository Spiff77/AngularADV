import {createAction} from '@ngrx/store';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {loadAllUsersStart, loadAllUsersSuccess} from './users.actions';
import {exhaustMap, map} from 'rxjs/operators';
import {UsersService} from '../../users.service';
import {Injectable} from '@angular/core';

@Injectable()
export class UsersEffect {

  constructor(private actions$: Actions, private userService: UsersService) {
  }

  getAll$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadAllUsersStart),
      exhaustMap( () => {
        return this.userService.getAll()
          .pipe(
            map(users => loadAllUsersSuccess({users}))
          )
      })
    )
    }
  )
}
