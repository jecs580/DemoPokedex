import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonesService {
  pokemon: any[] = [
    {
      'id' : 1,
      'nombre': 'fuego'
    }
  ];
  constructor() { }
}
