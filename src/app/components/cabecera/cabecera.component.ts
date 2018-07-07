import { Component, OnInit } from '@angular/core';
import { Router } from '../../../../node_modules/@angular/router';


@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  constructor( private ruta: Router) { }

  ngOnInit() {
  }
buscarPoke(termino: string) {
  console.log(termino);
  this.ruta.navigate(['pokemonserch', termino]);
}
}
