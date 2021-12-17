import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {checknameValidators} from '../checkname.validators';
import {UsersService} from '../users.service';
import {DuplicatenameValidator} from '../duplicatename.validator';

@Component({
  selector: 'app-dyna-form',
  templateUrl: './dyna-form.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ]
})
export class DynaFormComponent implements OnInit {

  myForm!: FormGroup;
  formSubmitted = false;

  constructor(private fb: FormBuilder, private us: UsersService, private uValidator: DuplicatenameValidator) { }

  ngOnInit(): void {

    this.myForm = this.fb.group(
      {
        'id': [''],
        'firstname': ['toto', checknameValidators(), this.uValidator.createValidator()],
      }
    )
  }

  getSocialNetworksArray(){
    return this.myForm.controls['socialnetworks'] as FormArray
  }

  addSnItem() {
    this.getSocialNetworksArray().push(this.createSocialNetworkFormGroup())
  }

  createSocialNetworkFormGroup(): FormGroup {
    return  this.fb.group({
      'name': '',
      'url': ''
    })
  }

  submitForm(){
    this.formSubmitted = true;
  }

  createFormObject(formGroup: FormGroup) {
    return (Object.values(this.myForm.controls) as FormControl[])
  }


  removeSnItem(i: number) {
    this.getSocialNetworksArray().removeAt(i)
  }
}
/*





 */
