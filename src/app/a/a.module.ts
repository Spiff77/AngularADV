import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {A1Component} from './a1/a1.component';
import {A2Component} from './a2/a2.component';
import {SharedModule} from '../shared/shared.module';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path:'a1', component: A1Component},
]

@NgModule({
  declarations: [
    A1Component,
    A2Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  exports: [
    A1Component
  ]
})
export class AModule { }
