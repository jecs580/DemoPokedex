import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Enrutamiento
import { RouterModule, Routes } from '@angular/router';
// F_Enrutamiento

// Servicios
import {PokemonesService} from '../app/services/pokemones.service';
// F_Servicios
import { AppComponent } from './app.component';
import { CabeceraComponent } from './components/cabecera/cabecera.component';
import { FooterComponent } from './components/footer/footer.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { PokemonesComponent } from './components/pokemones/pokemones.component';
import { PokemoninfoComponent } from './components/pokemoninfo/pokemoninfo.component';

const routes: Routes = [
  { path: 'pokemones', component: PokemonesComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'pokeinfo/:id', component: PokemoninfoComponent },
  { path: '', redirectTo: 'inicio', pathMatch: 'full'},
  { path: '**', redirectTo: 'inicio', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    FooterComponent,
    InicioComponent,
    PokemonesComponent,
    PokemoninfoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    PokemonesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
