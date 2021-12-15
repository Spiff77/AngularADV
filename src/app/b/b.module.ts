import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {B1Component} from './b1/b1.component';
import {B2Component} from './b2/b2.component';
import {SharedModule} from '../shared/shared.module';
import {FoodService} from '../food.service';



@NgModule({
  declarations: [
    B1Component,
    B2Component
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    B1Component
  ]

})
export class BModule { }
