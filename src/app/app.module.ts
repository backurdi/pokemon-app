import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonTableComponent } from './components/pokemon-table/pokemon-table.component';
import { PokemonTableHeaderComponent } from './components/pokemon-table-header/pokemon-table-header.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonTableComponent,
    PokemonTableHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
