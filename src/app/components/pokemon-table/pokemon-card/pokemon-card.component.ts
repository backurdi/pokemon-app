import { PokemonDetails, TYPE_COLOURS } from './../../../../interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit{
  @Input() pokemon = {} as PokemonDetails;

  ngOnInit(){
    this.pokemon.name = this.pokemon.name.charAt(0).toUpperCase() + this.pokemon.name.slice(1);
  }

  /**
   * returns colour based on type mapped
   * in TYPE_COLOURS interface
   */
   _getTypeColour(type: string): string {
    if (type) {
      return `#${(TYPE_COLOURS as any)[type]}`;
    }
    return '';
  }

}
