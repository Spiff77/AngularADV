import { Component, OnInit } from '@angular/core';
import {NameService} from '../name.service';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css'],
  providers: [NameService]
})
export class BComponent implements OnInit {

  constructor(public nameService: NameService) { }

  ngOnInit(): void {}

}
