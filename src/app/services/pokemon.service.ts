import { environment } from './../../environments/environment';
import { PokeAPI, PokemonDetails } from './../../interface';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  pokeAPI: any;
  pokeSpeciesAPI: any;

  constructor(private http: HttpClient) {
    this.pokeAPI = environment.pokemonURL;
    this.pokeSpeciesAPI = environment.pokemonSpeciesURL;
  }

  /**
   * Returns 251 pokemon
   */
   getPokemon(): Observable<PokeAPI> {
    return this.http
      .get<PokeAPI>(`${this.pokeAPI}?limit=251&offset=0`)
      .pipe(catchError(this._handleError));
  }

  /**
   * Uses pokemon name to retrieve individual pokemon details
   */
  getPokemonDetails(name:string): Observable<PokemonDetails> {
    return this.http
      .get<PokemonDetails>(`${this.pokeAPI}/${name}`)
      .pipe(catchError(this._handleError));
  }

  /**
   * Handles any request error
   */
   private _handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }
}
