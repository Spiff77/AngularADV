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

  constructor(private translateService: TranslateService,
              private http: HttpClient,
              private store: Store<{counter: {counter: number}}>,
              private db: AngularFirestore,
              private cfr: ComponentFactoryResolver
              ) {}


  changeLang(lang: string) {
    localStorage.setItem('lang', lang)
    this.translateService.use(lang)
  }

  ngOnInit(): void {
    this.translateService.use( localStorage.getItem('lang') || 'en')

    this.$value = this.store.select(getCounterValue)
   // setInterval(() => this.db.collection('test').add({rand: Math.random()}), 2000)
    this.db.collection('test').valueChanges().subscribe(console.log)

    const subject$ = new ReplaySubject(2);
    subject$.next(1)
    subject$.next(2)
    subject$.next(3)

    subject$.subscribe(v => console.log(v))

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
