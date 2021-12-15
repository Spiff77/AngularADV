import { Component, OnInit } from '@angular/core';
import {BreweryService} from '../brewery.service';
import {Observable} from 'rxjs';
import {TranslateService} from '@ngx-translate/core';
import {mergeMapTo, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-brewery',
  templateUrl: './brewery.component.html',
  styleUrls: ['./brewery.component.css']
})
export class BreweryComponent implements OnInit {

  breweries$!: Observable<any>
  constructor(private bs: BreweryService, private translateService: TranslateService) { }

  ngOnInit(): void {
    this.breweries$ = this.translateService.onLangChange.pipe(
      startWith({}),
      mergeMapTo(this.bs.getAll())
    );
  }

}
