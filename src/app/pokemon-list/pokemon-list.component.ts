import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { Pokemons } from '../models/pokemons';
import { Pokemon } from '../models/pokemon';
import { type } from 'os';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent implements OnInit {
  pokemons: Pokemons;
  pokemon: Pokemon;

  constructor(private service: PokemonService) {}

  ngOnInit(): void {
    this.getPoko();
  }

  getPoko() {
    this.service.getPokemonList().subscribe((pokemons: Pokemons) => {
      this.pokemons = pokemons;
      console.log(this.pokemons);

      this.pokemons.results.forEach((pokemonInfo) => {
        this.service
          .getPokemon(pokemonInfo.name)
          .subscribe((pokemon: Pokemon) => (pokemonInfo.pokemon = pokemon));
      });
    });
  }
}
