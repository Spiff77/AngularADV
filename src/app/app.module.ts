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

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HomeComponent,
    BreweryComponent,
    ParentComponent,
    ChildrenComponent,
    CounterComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    StoreModule.forRoot({
      counter: counterReducer
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  /*  ServiceWorkerModule.register('ngsw-worker.js', {
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
