import { Pipe, PipeTransform } from '@angular/core';
import { PokemonDetails } from 'src/interface';

@Pipe({
  name: 'page'
})
export class PagePipe implements PipeTransform {
    transform(value:PokemonDetails[], offset:number, size:number){
        // Shows the correct pokemon cards according to what page the user is on
        return [...value.slice(offset*size, offset*size + size)];
    }
}