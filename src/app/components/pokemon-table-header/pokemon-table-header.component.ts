import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-table-header',
  templateUrl: './pokemon-table-header.component.html',
  styleUrls: ['./pokemon-table-header.component.scss']
})
export class PokemonTableHeaderComponent implements OnInit {

  searchText:string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
