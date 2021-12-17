import {
  AfterContentInit, AfterViewInit,
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  HostListener,
  Injector,
  OnInit, ViewChild,
  ViewContainerRef
} from '@angular/core';
import {NameService} from './name.service';
import {FoodService} from './food.service';
import {TranslateService} from '@ngx-translate/core';
import {BehaviorSubject, from, fromEvent, interval, Observable, of, ReplaySubject, Subject} from 'rxjs';
import {concatMap, exhaustMap, map, mergeMap, shareReplay, subscribeOn, switchMap, take} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {createLogErrorHandler} from '@angular/compiler-cli/ngcc/src/execution/tasks/completion';
import {Store} from '@ngrx/store';
import {getCounterValue} from './store/counter/counter.selectors';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import {CounterComponent} from './counter/counter.component';
import {getUsers} from './store/user/users.selectors';
import {AppState} from './store/AppState';
import {loadAllUsersStart} from './store/user/users.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit{

  nameItem: any;
  food = true;
  req!: Observable<any>
  $value!: Observable<number>;
  @ViewChild('moncontainer', {read: ViewContainerRef})
  container!: ViewContainerRef;
  users$!: Observable<any>

  constructor(private translateService: TranslateService,
              private http: HttpClient,
              private store: Store<AppState>,
              private db: AngularFirestore,
              private cfr: ComponentFactoryResolver
              ) {}


  changeLang(lang: string) {
    localStorage.setItem('lang', lang)
    this.translateService.use(lang)
  }

  ngOnInit(): void {

    this.users$ = this.store.select(getUsers);
    this.store.dispatch(loadAllUsersStart())

    this.translateService.use( localStorage.getItem('lang') || 'en')

  }


  addComponent() {
    const factory = this.cfr.resolveComponentFactory(CounterComponent)
    const compo = this.container.createComponent(factory)
    compo.instance.$out.subscribe(v => console.log(v))
    if(this.container.length == 3) {
      compo.destroy()
    }
  }

  ngAfterViewInit(): void {
  }



}
