import {Component, Injector, OnInit} from '@angular/core';
import {NameService} from './name.service';
import {FoodService} from './food.service';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{

  nameItem: any;
  food = true;

  constructor(private translateService: TranslateService) {}

  changeLang(lang: string) {
    localStorage.setItem('lang', lang)
    this.translateService.use(lang)
  }

  ngOnInit(): void {
    this.translateService.use( localStorage.getItem('lang') || 'en')
  }
}
