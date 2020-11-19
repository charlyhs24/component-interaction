import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input('text') text: string;
  isButtonClicked: boolean = false;
  @Output() clickEvent = new EventEmitter<boolean>();
  constructor() { }
  clickHandler() {
    this.isButtonClicked = !this.isButtonClicked;
    this.clickEvent.emit(this.isButtonClicked);
  }
  ngOnInit() {
  }

}
