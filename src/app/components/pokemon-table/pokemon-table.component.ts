import { map, tap } from 'rxjs/operators';
import { PokeAPI, Results, PokemonDetails } from './../../../interface';
import { PokemonState } from './../../state/pokemon.state';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-table',
  templateUrl: './pokemon-table.component.html',
  styleUrls: ['./pokemon-table.component.scss']
})
export class PokemonTableComponent implements OnInit{
  query: string = '';
  sortQuery:string= '';
  pageSizeQuery:number=10;
  @Input() set search(newSearch: string) {
    if (newSearch !== this.query) {
      this.query = newSearch;
    }
  }
  @Input() set sort(newSort: string) {
    if (newSort !== this.sortQuery) {
      this.sortQuery = newSort;
    }
  }
  @Input() set pageSize(newPageSize: string) {
    if (+newPageSize !== this.pageSizeQuery) {
      this.pageSizeQuery = +newPageSize;
    }
  }

  constructor(private pokemonState: PokemonState) { }

  pokemons$ = this.pokemonState.getPokemons();

  ngOnInit(){
    this.pokemonState.fetchPokemons();
  } 

}
