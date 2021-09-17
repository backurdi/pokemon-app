import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonCardComponent } from './pokemon-card.component';

const pokemonMock = {
  "abilities": [
    {
      "ability": {
        "name": "shield-dust",
        "url": "https://pokeapi.co/api/v2/ability/19/"
      },
      "is_hidden": false,
      "slot": 1
    },
    {
      "ability": {
        "name": "run-away",
        "url": "https://pokeapi.co/api/v2/ability/50/"
      },
      "is_hidden": true,
      "slot": 3
    }
  ],
  "height": 3,
  "id": 10,
  "name": "caterpie",
  "sprites": {
    "other": {
      "dream_world": {
        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/10.svg",
        "front_female": null
      },
      "official-artwork": {
        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10.png"
      }
    }
  },
  "types": [
    {
      "slot": 1,
      "type": {
        "name": "bug",
        "url": "https://pokeapi.co/api/v2/type/7/"
      }
    }
  ],
  "weight": 29
}

describe('PokemonCardComponent', () => {
  let component: PokemonCardComponent;
  let fixture: ComponentFixture<PokemonCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonCardComponent);
    component = fixture.componentInstance;
    component.pokemon = pokemonMock;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
