import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  EventEmitter,
  OnInit, Output,
  SimpleChanges, HostListener
} from '@angular/core';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildrenComponent implements OnInit {

  @Input() children: any;
  @Output() out = new EventEmitter<string>()

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    setTimeout(() => this.cd.markForCheck(), 5000)
  }

  @HostListener('click')
  callParent(){
    this.out.emit('Hello from children')
  }

}
