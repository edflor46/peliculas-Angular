import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PeliculasService, Pelicula } from '../service/peliculas.service';


@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {
  peliculas:Pelicula[] =[];
  constructor(private _peliculasService:PeliculasService, private _router:Router) {
    console.log("Constructor");
    
   }

  ngOnInit(): void {
    this.peliculas = this._peliculasService.getPeliculas();
  }

  verPelicula(idx:number){
    this._router.navigate(['/pelicula', idx])
  }

}
