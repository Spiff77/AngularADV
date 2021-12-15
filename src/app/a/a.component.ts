import { Component, OnInit } from '@angular/core';
import {NameService} from '../name.service';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css'],
  providers: [NameService]
})
export class AComponent implements OnInit {

  constructor(public nameService: NameService) { }

  ngOnInit(): void {
  }

}
