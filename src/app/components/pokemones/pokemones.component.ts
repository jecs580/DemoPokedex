import { Component, OnInit } from '@angular/core';
import {PokemonesService} from '../../services/pokemones.service';
@Component({
  selector: 'app-pokemones',
  templateUrl: './pokemones.component.html',
  styleUrls: ['./pokemones.component.css']
})
export class PokemonesComponent implements OnInit {

  pokemon: any[] = [];
  constructor( private _serviciopoke: PokemonesService) {

    this.pokemon = _serviciopoke.obtenerpokemon();
   }

  ngOnInit() {
  }

}
