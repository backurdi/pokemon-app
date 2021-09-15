import { Pipe, PipeTransform } from '@angular/core';
import { PokemonDetails } from 'src/interface';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {
    transform(value:PokemonDetails[], sortingField:string):PokemonDetails[]{
        debugger;
        // Strict typing, the type of the value should be updated so dynamic properties could be used
        if(sortingField==='weight'){
            return [...value.sort((a, b)=>(a.weight < b.weight ? -1 : 1) )];
        }else if(sortingField==='height'){
            return [...value.sort((a, b)=>(a.height < b.height ? -1 : 1) )];
        }else if(sortingField==='name'){
            return [...value.sort((a, b)=>(a.name < b.name ? -1 : 1) )];
        }else{
            return [...value.sort((a, b)=>(a.id < b.id ? -1 : 1) )];
        }
    }
}