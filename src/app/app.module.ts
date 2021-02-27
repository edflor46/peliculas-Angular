import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { AcercaComponent } from './components/acerca/acerca.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { TarjetaPeliculaComponent } from './components/tarjeta-pelicula/tarjeta-pelicula.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { APP_ROUTING } from './app.routes';
import { PeliculasService } from './components/service/peliculas.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PeliculasComponent,
    AcercaComponent,
    PeliculaComponent,
    TarjetaPeliculaComponent,
    BuscadorComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [PeliculasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
