import { Component, EventEmitter, HostListener, Output } from '@angular/core';

export enum KEY_CODE {
  RIGHT_ARROW = 39,
  LEFT_ARROW = 37
}

@Component({
  selector: 'app-page-nav',
  templateUrl: './page-nav.component.html',
  styleUrls: ['./page-nav.component.scss']
})
export class PageNavComponent{

  // Listen to keyup event
  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.keyCode === KEY_CODE.RIGHT_ARROW) {
      this.navigationButtonClick('next');
    }

    if (event.keyCode === KEY_CODE.LEFT_ARROW) {
      this.navigationButtonClick('previous');
    }
  };
  
  @Output() navigate = new EventEmitter();

  /**
   * Emits the button click to the parent indicating what page to navigate to
   * @param page String defining the page navigating to is previous or next
   */
  navigationButtonClick(page:string){
    this.navigate.emit(page)
  }
}
