import { Injectable } from '@angular/core';

@Injectable()
export class FoodService {

  public name = 'apple';

  constructor() {
    console.log('CONTRUCTOR')
  }
}
