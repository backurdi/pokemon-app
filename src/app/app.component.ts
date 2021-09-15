import { PokemonState } from './state/pokemon.state';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pokemon-app';
  public search: string = ''; 
  public sort: string = ''; 

   /**
   *  Called when search input changes
   */
    newPokemonSearch(search: string): void {
      if (this.search !== search) {
        this.search = search;
      }
    }

   /**
   *  Called when sort select changes
   */
    newPokemonSort(sort: string): void {
      if (this.sort !== sort) {
        this.sort = sort;
      }
    }
}
