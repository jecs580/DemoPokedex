import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonesService {
  pokemon: any[] = [
    {
      id : 1,
      nombre: 'Pokemon desconocido',
      imagen: '01.png',
      tipo: 'fuego',
      descripcion: 'esto es una descripcion del pokemon'
    },
    {
      id : 2,
      nombre: 'Bulbasaur',
      imagen: '02.png',
      tipo: 'planta',
      descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, aut'
    },
    {
      id : 3,
      nombre: 'Charmander',
      imagen: '03.png',
      tipo: 'fuegp',
      descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, aut'
    },
    {
      id : 4,
      nombre: 'Squirtle',
      imagen: '04.png',
      tipo: 'Agua',
      descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, aut'
    },
    {
      id : 5,
      nombre: 'Picachu',
      imagen: '05.png',
      tipo: 'electrico',
      descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, aut'
    },
    {
      id : 6,
      nombre: 'Pokemon desconocido',
      imagen: '06.png',
      tipo: 'desconocido',
      descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, aut'
    },
  ];
  constructor() { }
  obtenerpokemon() {
    return this.pokemon;
  }
  obtenerpokemonx(id: number) {
    // tslint:disable-next-line:prefer-const
    let pokeArr = [];
    for (const item of this.pokemon) {
      // tslint:disable-next-line:triple-equals
      if ( item.id == id ) {
        pokeArr.push(item);
      }
    }
    return pokeArr;
  }
  BuscadaPoke(cadena: String) {
    // tslint:disable-next-line:prefer-const
    let Arrbuscado = [];
    cadena = cadena.toUpperCase();
    for ( const item of this.pokemon) {
      const nombre  = item.nombre.toUpperCase();
      if (nombre.indexOf(cadena) > 0) {
        Arrbuscado.push(item);
      }
    }
    return Arrbuscado;
  }
}
