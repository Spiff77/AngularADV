import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {A1Component} from './a1/a1.component';
import {A2Component} from './a2/a2.component';
import {SharedModule} from '../shared/shared.module';
import {RouterModule, Routes} from '@angular/router';
import {StoreModule} from '@ngrx/store';
import {counterReducer} from '../store/counter/counter.reducer';
import {USERS_FEATURE} from '../store/user/users.selectors';
import {usersReducer} from '../store/user/users.reducer';

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
    SharedModule,
   // StoreModule.forFeature(USERS_FEATURE, usersReducer),
  ],
  exports: [
    A1Component
  ]
})
export class AModule { }
