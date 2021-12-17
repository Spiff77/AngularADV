import {AbstractControl, FormControl, FormGroup, ValidatorFn} from '@angular/forms';

export function checknameValidators(): ValidatorFn {
  return (control:AbstractControl) => {
    if((control.value as string).length < 3){
      return {nameTooShort: true}
    }
    return null
  }
}
