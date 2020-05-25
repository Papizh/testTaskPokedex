import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { Pokemons } from '../models/pokemons';
import { Pokemon } from '../models/pokemon';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent implements OnInit {
  pokemons: Pokemons;
  pokemon: Pokemon;
  offset = 12;

  constructor(private service: PokemonService) {}

  ngOnInit(): void {
    this.getPoko();
  }

  getPoko() {
    this.service.getPokemonList(this.offset).subscribe((pokemons: Pokemons) => {
      this.pokemons = pokemons;
      this.pokemons.results.forEach((pokemonInfo) => {
        this.service
          .getPokemon(pokemonInfo.name)
          .subscribe((pokemon: Pokemon) => (pokemonInfo.pokemon = pokemon));
      });
    });
  }
  loadMore() {
    this.offset = this.offset + 12;
    this.service.getPokemonList(this.offset).subscribe((pokemons: Pokemons) => {
      this.pokemons = pokemons;
      this.pokemons.results.forEach((pokemonInfo) => {
        this.service
          .getPokemon(pokemonInfo.name)
          .subscribe((pokemon: Pokemon) => (pokemonInfo.pokemon = pokemon));
      });
    });
    console.log(this.offset);
  }
}
