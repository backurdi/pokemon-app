import { Pipe, PipeTransform } from '@angular/core';
import { PokemonDetails } from 'src/interface';

@Pipe({
  name: 'page'
})
export class PagePipe implements PipeTransform {
    transform(value:PokemonDetails[], offset:number, size:number){
        return value.splice(offset*size, size);
    }
}