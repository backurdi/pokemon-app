import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonTableComponent } from './components/pokemon-table/pokemon-table.component';
import { PokemonTableHeaderComponent } from './components/pokemon-table-header/pokemon-table-header.component';
import { PokemonCardComponent } from './components/pokemon-table/pokemon-card/pokemon-card.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonTableComponent,
    PokemonTableHeaderComponent,
    PokemonCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
