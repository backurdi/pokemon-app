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
  public pageSize: string = "10"; 

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

   /**
   *  Called when page size select changes
   */
    newPokemonPageSize(pageSize: string): void {
      if (this.pageSize !== pageSize) {
        this.pageSize = pageSize;
      }
    }
}
