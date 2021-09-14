import { map, tap } from 'rxjs/operators';
import { PokeAPI, Results, PokemonDetails } from './../../../interface';
import { PokemonState } from './../../state/pokemon.state';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-table',
  templateUrl: './pokemon-table.component.html',
  styleUrls: ['./pokemon-table.component.scss']
})
export class PokemonTableComponent implements OnInit{
  
  constructor(private pokemonState: PokemonState) { }

  pokemons$ = this.pokemonState.getPokemons();

  ngOnInit(){
    this.pokemonState.fetchPokemons('20', '0');
  }  

}
