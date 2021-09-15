import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonTableComponent } from './components/pokemon-table/pokemon-table.component';
import { PokemonTableHeaderComponent } from './components/pokemon-table-header/pokemon-table-header.component';
import { PokemonCardComponent } from './components/pokemon-table/pokemon-card/pokemon-card.component';
import { SearchPipe } from './pipes/search.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { PagePipe } from './pipes/page.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PokemonTableComponent,
    PokemonTableHeaderComponent,
    PokemonCardComponent,
    SearchPipe,
    SortPipe,
    PagePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
