import { HttpClient } from '@angular/common/http';
import { PokemonService } from './../services/pokemon.service';
import { TestBed } from '@angular/core/testing';

import { PokemonState } from './pokemon.state';
import { of } from 'rxjs';

describe('PokemonState', () => {
  let service: PokemonState;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[PokemonService, {provide:HttpClient, useValue:{get:()=>of({})}}]
    });
    service = TestBed.inject(PokemonState);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
