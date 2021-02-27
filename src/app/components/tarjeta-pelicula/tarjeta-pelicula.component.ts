import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjeta-pelicula',
  templateUrl: './tarjeta-pelicula.component.html',
  styleUrls: ['./tarjeta-pelicula.component.css']
})
export class TarjetaPeliculaComponent implements OnInit {
@Input() pelicula:any = {};
@Input() index:number;

@Output() peliculaSeleccionada:EventEmitter<number>
  constructor(private router:Router) {
    this.peliculaSeleccionada = new EventEmitter();
   }

  ngOnInit(): void {
  }

  verPelicula(){
    this.router.navigate(['/pelicula', this.index]);
  }

}
