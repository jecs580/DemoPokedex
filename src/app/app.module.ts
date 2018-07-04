import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Enrutamiento
import { RouterModule, Routes } from '@angular/router';
// F_Enrutamiento
import { AppComponent } from './app.component';
import { CabeceraComponent } from './components/cabecera/cabecera.component';
import { FooterComponent } from './components/footer/footer.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { PokemonesComponent } from './components/pokemones/pokemones.component';

const routes: Routes = [
  { path: 'pokemones', component: PokemonesComponent },
  { path: 'inicio', component: InicioComponent },
  { path: '', component: InicioComponent, pathMatch: 'full' },
  { path: '', component: InicioComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '/inicio', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    FooterComponent,
    InicioComponent,
    PokemonesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
