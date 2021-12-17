import {UsersService} from './users.service';
import {AbstractControl} from '@angular/forms';
import {map} from 'rxjs/operators';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DuplicatenameValidator {

  constructor(private us: UsersService) {
  }
  createValidator(): any {
    return (control: AbstractControl) => {
      return this.us.userNameExist(control.value).pipe(
        map(v => v ? {duplicateName : true} : null)
      )
    }
  }
}
