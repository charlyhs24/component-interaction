import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  status: string = 'belum bayar';
  constructor() { }
  changeColor() {
    if (this.status == 'belum bayar') {
      return "status-danger";
    } else {
      return "status-success";
    }
  }
  Clickhandler(event: boolean) {
    if (event) {
      this.status = 'Lunas';
    } else {
      this.status = 'belum bayar';
    }
  }
  ngOnInit() {
  }

}
