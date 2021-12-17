import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {checknameValidators} from '../checkname.validators';

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

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    this.myForm = this.fb.group(
      {
        'id': [''],
        'firstname': ['toto', checknameValidators()],
        'lastname': '',
        'name': '',
        'address': this.fb.group({
          'name': '',
          'id': '',
          'number': '',
          'street': ['', Validators.required],
          'city': ''
        }),
        'socialnetworks': this.fb.array([
          this.createSocialNetworkFormGroup()
        ])
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
