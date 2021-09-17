import { PagePipe } from './pipes/page.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { SearchPipe } from './pipes/search.pipe';
import { PokemonTableComponent } from './components/pokemon-table/pokemon-table.component';
import { PageNavComponent } from './components/page-nav/page-nav.component';
import { PokemonCardComponent } from './components/pokemon-table/pokemon-card/pokemon-card.component';
import { PokemonTableHeaderComponent } from './components/pokemon-table-header/pokemon-table-header.component';
import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      providers:[{provide:HttpClient, useValue:{get:()=>of({})}}],
      declarations: [
        AppComponent,
        PokemonTableHeaderComponent,
        PokemonCardComponent,
        PageNavComponent,
        PokemonTableComponent,
        SearchPipe, 
        SortPipe, 
        PagePipe, 
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'pokemon-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('pokemon-app');
  });
});
