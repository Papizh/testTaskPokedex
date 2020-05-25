import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../models/pokemon';
import { PokemonService } from '../services/pokemon.service';
import { ActivatedRoute } from '@angular/router';
import { stat } from 'fs';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss'],
})
export class PokemonDetailsComponent implements OnInit {
  pokemon: Pokemon;
  constructor(private service: PokemonService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.loadData(params.get('id'));
   
    });
  }

  loadData(name: string) {
    this.service
      .getPokemon(name)
      .subscribe((data: Pokemon) => (this.pokemon = data));
  }
}
