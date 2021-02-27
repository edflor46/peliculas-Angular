import { Routes, RouterModule } from '@angular/router';
import { AcercaComponent } from './components/acerca/acerca.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { BuscadorComponent } from './components/buscador/buscador.component';



const APP_ROUTES:Routes = [
    { path: 'inicio', component: InicioComponent },
    { path: 'peliculas', component: PeliculasComponent },
    { path: 'pelicula/:id', component: PeliculaComponent },
    { path: 'acerca', component: AcercaComponent },
    { path: 'buscar/:termino', component: BuscadorComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'inicio' }
];


export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);