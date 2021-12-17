import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ]
})
export class TableComponent implements OnInit {

  @Input() myFormArray: FormArray = new FormArray([])
  @Input() formGroup!: FormGroup

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    console.log(this.myFormArray.parent)
  }

  addSnItem() {
   this.myFormArray.push(this.createSocialNetworkFormGroup())
  }

  getForm(): FormGroup {
    return this.myFormArray.parent as FormGroup
  }

  createSocialNetworkFormGroup(): FormGroup {
    return  this.fb.group({
      'name': '',
      'url': ''
    })
  }


  getFormObject(formGroup: AbstractControl) {
    const myFormGroup = formGroup as FormGroup
    return (Object.values(myFormGroup.controls) as FormControl[])
  }


  removeSnItem(i: number) {
    this.myFormArray.removeAt(i)
  }
}
