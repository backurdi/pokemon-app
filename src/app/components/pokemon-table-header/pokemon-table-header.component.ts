import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pokemon-table-header',
  templateUrl: './pokemon-table-header.component.html',
  styleUrls: ['./pokemon-table-header.component.scss']
})
export class PokemonTableHeaderComponent implements OnInit {

  @Output() searchChange = new EventEmitter();
  @Output() sortChange = new EventEmitter();
  searchText:string = '';
  sortText:string = '';

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Called when a search field is updated
   */
   searchEvent(): void {
    this.searchChange.emit(this.searchText);
  }

  /**
   * Called when a sort field is updated
   */
   sortEvent(): void {
    this.sortChange.emit(this.sortText);
  }

}
