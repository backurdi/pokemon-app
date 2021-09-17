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
  pageSize: string = '10';
  pageNumber: number = 0;
  pokemonArrSize: number = 0;

  constructor(private pokemonState: PokemonState) {}

  ngOnInit() {
    this.pokemonState
      .getPokemonsArraySize()
      .subscribe(arraySize => (this.pokemonArrSize = arraySize));
  }

  /**
   * *  Called when search input changes
   * @param search Search query text
   */
  newPokemonSearch(search: string): void {
    if (this.search !== search) {
      this.search = search;
      localStorage.setItem('searchText', search);
      this.pageNumber = 0;
    }
  }

  /**
   * Called when sort select changes
   * @param sort What to stort the pokemons on
   */
  newPokemonSort(sort: string): void {
    if (this.sort !== sort) {
      this.sort = sort;
      localStorage.setItem('sort', sort);
      this.pageNumber = 0;
    }
  }

  /**
   * Called when page size select changes
   * @param pageSize size of how many cards should be shown
   */
  newPokemonPageSize(pageSize: string): void {
    if (this.pageSize !== pageSize) {
      this.pageSize = pageSize;
      this.pageNumber = 0;
    }
  }

  /**
   * Called when navigation changes
   * @param navigateTo which page to navigate to previous or next
   */
  newPokemonNavigate(navigateTo: string) {
    if (navigateTo === 'previous' && this.pageNumber !== 0) {
      this.pageNumber = this.pageNumber - 1;
    } else if (
      navigateTo === 'next' &&
      +this.pageSize * this.pageNumber < this.pokemonArrSize - 1
    ) {
      this.pageNumber = this.pageNumber + 1;
    }
  }
}
