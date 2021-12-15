import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {B1Component} from './b1/b1.component';
import {B2Component} from './b2/b2.component';
import {SharedModule} from '../shared/shared.module';
import {Router, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path:'b1', component: B1Component},
]

@NgModule({
  declarations: [
    B1Component,
    B2Component
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    B1Component
  ]

})
export class BModule { }
