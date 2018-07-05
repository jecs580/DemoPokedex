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
    console.log( this._serviciopoke);
    this.pokemon = _serviciopoke.obtenerpokemon();
    console.log( this.pokemon );
   }

  ngOnInit() {
  }

}
