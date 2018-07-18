import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';
import {PokemonesService} from '../../services/pokemones.service';
@Component({
  selector: 'app-pokebuscado',
  templateUrl: './pokebuscado.component.html',
  styleUrls: ['./pokebuscado.component.css']
})
export class PokebuscadoComponent implements OnInit {
pokemon: any[] = [];
  constructor( private params: ActivatedRoute, private pokemones: PokemonesService) {
    // tslint:disable-next-line:no-shadowed-variable
    this.params.params.subscribe(params => {
     this.pokemon = this.pokemones.buscarPokemon(params['nombre']);
    });
   }

  ngOnInit() {
  }

}
