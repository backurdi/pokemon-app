import { PokeAPI, Results, PokemonDetails } from '../../interface';
import { PokemonService } from '../services/pokemon.service';
import { Injectable } from '@angular/core';
import { switchMap, tap, map } from 'rxjs/operators';
import { BehaviorSubject, forkJoin } from 'rxjs';

interface StateInterface{
  pokemons:PokemonDetails[],
  offset:string
}

@Injectable({
  providedIn: 'root'
})
export class PokemonState {


  state:BehaviorSubject<StateInterface> = new BehaviorSubject({
    pokemons:{} as PokemonDetails[],
    offset:''
  });

  constructor(private pokemonService: PokemonService) { }

  fetchPokemons(size:string, offset:string){
    if(this.state.value.offset !== offset){
      return this.pokemonService.getPokemon(size, offset).pipe(
        switchMap((pokemonResponse: PokeAPI)=>{
          debugger;
          return forkJoin(pokemonResponse.results.map((pokemon: Results)=>this.pokemonService.getPokemonDetails(pokemon.name)))
        }),
        tap((pokemons: PokemonDetails[])=>{
          this.state.next({offset:offset, pokemons})
        })
      ).subscribe();
    }
    return this.state.asObservable();
  }

  getPokemons(){
    return this.state.pipe(map(pokemonState=>pokemonState.pokemons));
  }
}
