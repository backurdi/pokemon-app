import { Pipe, PipeTransform } from '@angular/core';
import { PokemonDetails } from 'src/interface';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(value: PokemonDetails[] | null, searchText?: any): PokemonDetails[] {
    // Filter the pokemon cards based on search query
    if (!value) {
      return [];
    }
    if (!searchText) {
      return value;
    }
    searchText = searchText.toLowerCase();

    
    return value.filter((item:PokemonDetails) => {
      let matchFound = false;

      if (item.name) {
        const name = item.name;

        const searchName = JSON.stringify(name).toLowerCase().includes(searchText);
        const searchAbbilities = JSON.stringify(item.abilities).toLowerCase().includes(searchText);

        if (searchName || searchAbbilities) {
          matchFound = true;
        }
      }
      return matchFound;
    });
  }
}