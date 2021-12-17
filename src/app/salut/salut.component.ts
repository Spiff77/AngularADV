import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-salut',
  templateUrl: './salut.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ]
})
export class SalutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
