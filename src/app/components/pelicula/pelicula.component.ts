import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../service/peliculas.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css'],
})
export class PeliculaComponent implements OnInit {
  pelicula: any = {};
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _peliculasService: PeliculasService
  ) {
    this._activatedRoute.params.subscribe((params) => {
      console.log(params['id']);
      this.pelicula = this._peliculasService.getPelicula(params['id']);
      console.log(this.pelicula);
    });
  }

  ngOnInit(): void {}
}
