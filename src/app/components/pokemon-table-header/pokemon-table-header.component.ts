import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pokemon-table-header',
  templateUrl: './pokemon-table-header.component.html',
  styleUrls: ['./pokemon-table-header.component.scss']
})
export class PokemonTableHeaderComponent implements OnInit {

  @Output() searchChange = new EventEmitter<string>();
  @Output() sortChange = new EventEmitter<string>();
  @Output() pageSizeChange = new EventEmitter<string>();
  searchText:string = '';
  sortText:string = '';
  pageSize:string = "10";

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Called when search field is updated
   */
   searchEvent(): void {
    this.searchChange.emit(this.searchText);
  }

  /**
   * Called when sort field is updated
   */
   sortEvent(): void {
    this.sortChange.emit(this.sortText);
  }

  /**
   * Called when page size field is updated
   */
   pageSizeEvent(): void {
    this.pageSizeChange.emit(this.pageSize);
  }

}
