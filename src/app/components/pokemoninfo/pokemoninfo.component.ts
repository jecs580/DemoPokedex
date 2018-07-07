import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
import {PokemonesService} from '../../services/pokemones.service';

@Component({
  selector: 'app-pokemoninfo',
  templateUrl: './pokemoninfo.component.html',
  styleUrls: ['./pokemoninfo.component.css']
})
export class PokemoninfoComponent implements OnInit {

  pokemoninfo: any[] = [];
  constructor(
    private ruta: ActivatedRoute,
    private _serviciopoke: PokemonesService
  ) {
      this.ruta.params.subscribe(params => {
        this.pokemoninfo = this._serviciopoke.obtenerpokemonx(params['id']);
        console.log(this.pokemoninfo);
      });
  }

  ngOnInit() {
  }

}
