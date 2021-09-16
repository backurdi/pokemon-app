import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-page-nav',
  templateUrl: './page-nav.component.html',
  styleUrls: ['./page-nav.component.scss']
})
export class PageNavComponent implements OnInit {
  @Output() navigate = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  navigationButtonClick(page:string){
    this.navigate.emit(page)
  }
}
