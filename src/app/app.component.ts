import {Component, Injector} from '@angular/core';
import {NameService} from './name.service';
import {FoodService} from './food.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  nameItem: any;
  food = true;

  constructor() {
    const i = Injector.create({providers: [{provide: FoodService}]})
    const s = i.get(FoodService)
    /*this.nameItem = s.name*/
  }

}
