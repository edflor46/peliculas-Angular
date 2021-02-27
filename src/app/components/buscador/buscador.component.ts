import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../service/peliculas.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {
peliculas:any[] = [];
termino:string;
  constructor(private activatedRouted:ActivatedRoute, private _peliculasService:PeliculasService) {

   }

  ngOnInit(): void {
    this.activatedRouted.params.subscribe(params =>{
      this.termino = params['termino'];
      console.log(['termino']);
      this.peliculas = this._peliculasService.buscarPeliculas(params['termino']);

      
    });
  }

}
