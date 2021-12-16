import {Component, HostListener, Injector, OnInit} from '@angular/core';
import {NameService} from './name.service';
import {FoodService} from './food.service';
import {TranslateService} from '@ngx-translate/core';
import {BehaviorSubject, from, fromEvent, interval, Observable, of, ReplaySubject, Subject} from 'rxjs';
import {concatMap, exhaustMap, map, mergeMap, shareReplay, subscribeOn, switchMap, take} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {createLogErrorHandler} from '@angular/compiler-cli/ngcc/src/execution/tasks/completion';
import {Store} from '@ngrx/store';
import {getCounterValue} from './store/counter/counter.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{

  nameItem: any;
  food = true;
  req!: Observable<any>
  $value!: Observable<number>;

  constructor(private translateService: TranslateService,
              private http: HttpClient,
              private store: Store<{counter: {counter: number}}>) {}

  changeLang(lang: string) {
    localStorage.setItem('lang', lang)
    this.translateService.use(lang)
  }

  ngOnInit(): void {
    this.translateService.use( localStorage.getItem('lang') || 'en')

    this.$value = this.store.select(getCounterValue)


    const subject$ = new ReplaySubject(2);
    subject$.next(1)
    subject$.next(2)
    subject$.next(3)

    subject$.subscribe(v => console.log(v))

  }

  @HostListener('click')
  sendReq(){
    this.req.subscribe(console.log)
  }
}
