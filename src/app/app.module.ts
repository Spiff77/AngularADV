import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { UserComponent } from './user/user.component';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {TestInterceptor} from './test.interceptor';
import {BreweryInterceptor} from './brewery.interceptor';
import { BreweryComponent } from './brewery/brewery.component';
import { ParentComponent } from './parent/parent.component';
import { ChildrenComponent } from './children/children.component';
import { CounterComponent } from './counter/counter.component';
import {StoreModule} from '@ngrx/store';
import {counterReducer} from './store/counter/counter.reducer';
import { CounterFormComponent } from './counter-form/counter-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AngularFireModule} from '@angular/fire/compat';
import {AngularFirestoreModule} from '@angular/fire/compat/firestore';
import {AngularFireAuthModule} from '@angular/fire/compat/auth';
import { SalutComponent } from './salut/salut.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import { DynaFormComponent } from './dyna-form/dyna-form.component';
import { TableComponent } from './table/table.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import {usersReducer} from './store/user/users.reducer';
import {UsersEffect} from './store/user/users.effect';

const routes:Routes = [
  {path: '', component: HomeComponent},
  {path: 'users', component: UserComponent},
  {path: 'breweries', component: BreweryComponent},
  {path: 'a', loadChildren: () =>  import('./a/a.module').then(m => m.AModule)},
  {path: 'b', loadChildren: () =>  import('./b/b.module').then(m => m.BModule)}
]

export function HttpLoaderFactory(http: HttpClient){
    return new TranslateHttpLoader(http)
}

const firebaseConfig = {
  apiKey: "AIzaSyCqAEbHre23y1DZ1LEUNpTuQft5i8o93BU",
  authDomain: "hello-6cac5.firebaseapp.com",
  projectId: "hello-6cac5",
  storageBucket: "hello-6cac5.appspot.com",
  messagingSenderId: "992629834869",
  appId: "1:992629834869:web:7d55ba2e88d43dddc1e43c",
  measurementId: "G-NF0ZVZNQED"
};


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HomeComponent,
    BreweryComponent,
    ParentComponent,
    ChildrenComponent,
    CounterComponent,
    CounterFormComponent,
    SalutComponent,
    DynaFormComponent,
    TableComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    StoreModule.forRoot({
      counter: counterReducer,
      users: usersReducer
    }),

    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    FormsModule,
    ReactiveFormsModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([UsersEffect]),
    /*ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),*/
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: BreweryInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
