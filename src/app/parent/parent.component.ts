import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  user = {id: 10, name: 'toto'}

  constructor() { }

  ngOnInit(): void {
  }

  changeName() {
    this.user.name = 'titi'
  }

  receiveMessage(message: string) {
    console.log('parent', message)
  }
}
