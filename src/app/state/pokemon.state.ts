import { PokeAPI, Results, PokemonDetails } from '../../interface';
import { PokemonService } from '../services/pokemon.service';
import { Injectable } from '@angular/core';
import { switchMap, tap, map } from 'rxjs/operators';
import { BehaviorSubject, forkJoin } from 'rxjs';

interface StateInterface{
  pokemons:PokemonDetails[],
  offset:number,
  size:number,
}

@Injectable({
  providedIn: 'root'
})
export class PokemonState {


  state:BehaviorSubject<StateInterface> = new BehaviorSubject({
    pokemons:[] as PokemonDetails[],
    offset:0,
    size:10
  });

  constructor(private pokemonService: PokemonService) { }

  fetchPokemons(){
      return this.pokemonService.getPokemon().pipe(
        switchMap((pokemonResponse: PokeAPI)=>{
          return forkJoin(pokemonResponse.results.map((pokemon: Results)=>this.pokemonService.getPokemonDetails(pokemon.name)))
        }),
        tap((pokemons: PokemonDetails[])=>{
          this.state.next({...this.state.value,  pokemons})
        })
      ).subscribe();
  }

  getPokemons(){
    return this.state.pipe(map(pokemonState=>pokemonState.pokemons));
  }
}
