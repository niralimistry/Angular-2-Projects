import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
  @Input() mehul: string;
  @Output() onEventChange = new EventEmitter();
  b:string;
  changeEvent() {
    this.onEventChange.emit(this.b);
  }
  constructor() { }
  ngOnInit() {
  }
}
