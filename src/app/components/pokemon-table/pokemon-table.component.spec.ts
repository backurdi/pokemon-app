import { PokemonState } from './../../state/pokemon.state';
import { PageNavComponent } from './../page-nav/page-nav.component';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { PokemonTableHeaderComponent } from './../pokemon-table-header/pokemon-table-header.component';
import { PagePipe } from './../../pipes/page.pipe';
import { SortPipe } from './../../pipes/sort.pipe';
import { SearchPipe } from './../../pipes/search.pipe';
import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { PokemonTableComponent } from './pokemon-table.component';

describe('PokemonTableComponent', () => {
  let component: PokemonTableComponent;
  let fixture: ComponentFixture<PokemonTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        PokemonTableComponent, 
        SearchPipe, 
        SortPipe, 
        PagePipe, 
        PokemonTableHeaderComponent,
        PokemonCardComponent,
        PageNavComponent,
      ],
      providers:[
        {provide:HttpClient, useValue:{get:()=>of({})}}, 
        {provide: PokemonState, useValue:{getPokemons: ()=>of([]), fetchPokemons:()=>{}}}],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
