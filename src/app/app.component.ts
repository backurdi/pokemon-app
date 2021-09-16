import { PokemonState } from './state/pokemon.state';
import { Component, OnInit } from '@angular/core';
import { take, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'pokemon-app';
  search: string = ''; 
  sort: string = ''; 
  pageSize: string = "10"; 
  pageNumber: number = 0;
  pokemonArrSize:number = 0;

  constructor(private pokemonState: PokemonState){}

  ngOnInit(){
    this.pokemonState.state.pipe(
      tap(pokemonState=>{this.pokemonArrSize = pokemonState.pokemonArraySize})
      ).subscribe();
  }

   /**
   *  Called when search input changes
   */
    newPokemonSearch(search: string): void {
      if (this.search !== search) {
        this.search = search;
        localStorage.setItem('searchText', search);
      }
    }
    
    /**
     *  Called when sort select changes
     */
    newPokemonSort(sort: string): void {
      if (this.sort !== sort) {
        this.sort = sort;
        localStorage.setItem('sort', sort);
      }
    }

   /**
   *  Called when page size select changes
   */
    newPokemonPageSize(pageSize: string): void {
      if (this.pageSize !== pageSize) {
        this.pageSize = pageSize;
        this.pageNumber = 0;
      }
    }

    newPokemonNavigate(navigateTo:string){
      if(navigateTo==='previous' && this.pageNumber !== 0){
        this.pageNumber = this.pageNumber-1
      }else if(navigateTo==='next' && +this.pageSize*this.pageNumber < this.pokemonArrSize-1){
        this.pageNumber = this.pageNumber+1
      }
    }
}
