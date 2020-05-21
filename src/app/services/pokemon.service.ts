import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { Pokemons } from '../models/pokemons';


@Injectable({
  providedIn: 'root'
})


export class PokemonService {
  apiUrl = 'https://pokeapi.co/api/v2'

  constructor(private http: HttpClient) { }



  getPokemonList(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/pokemon?limit=12`)
  }
}
