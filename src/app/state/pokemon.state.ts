import { PokeAPI, Results, PokemonDetails } from '../../interface';
import { PokemonService } from '../services/pokemon.service';
import { Injectable } from '@angular/core';
import { switchMap, tap, map, take } from 'rxjs/operators';
import { BehaviorSubject, forkJoin } from 'rxjs';

interface StateInterface{
  pokemons:PokemonDetails[],
  pokemonArraySize:number,
}

@Injectable({
  providedIn: 'root'
})
export class PokemonState {


  state:BehaviorSubject<StateInterface> = new BehaviorSubject({
    pokemons:[] as PokemonDetails[],
    pokemonArraySize: 0
  });

  constructor(private pokemonService: PokemonService) { }

  // Fetches pokemon arrays and then fetches the details for the individual pokemon, returns a complete array of pokemons with details
  fetchPokemons(){
      return this.pokemonService.getPokemon().pipe(
        take(1),
        switchMap((pokemonResponse: PokeAPI)=>{
          return forkJoin(pokemonResponse.results.map((pokemon: Results)=>this.pokemonService.getPokemonDetails(pokemon.name)))
        }),
        tap((pokemons: PokemonDetails[])=>{
          this.state.next({pokemonArraySize: pokemons.length,  pokemons})
        })
      ).subscribe();
  }

  // Returns the pokemon array size from the state
  getPokemons(){
    return this.state.pipe(map(pokemonState=>pokemonState.pokemons));
  }

  getPokemonsArraySize(){
    return this.state.pipe(map(pokemonState=>pokemonState.pokemonArraySize));
  }
}
