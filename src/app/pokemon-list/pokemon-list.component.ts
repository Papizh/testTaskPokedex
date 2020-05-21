import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { Pokemons } from '../models/pokemons';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  pokemons;
  constructor(private service: PokemonService) { }

  ngOnInit(): void {
    this.getPoko()
  }

  getPoko() {
    this.service.getPokemonList()
      .subscribe((pokemons => {
        this.pokemons = pokemons;
        console.log(this.pokemons);
        console.log(this.pokemons.results);
      })
      )
  }
}
