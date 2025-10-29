import { Component, OnInit } from '@angular/core';
import { CommonModule, UpperCasePipe } from '@angular/common';
import { Servicios, Amigo } from '../services/servicios';

@Component({
  selector: 'app-listaamigos',
  templateUrl: './listaamigos.html',
  styleUrls: ['./listaamigos.css'],
  standalone: true,
  imports: [
    CommonModule] // necesario para *ngFor y *ngIf
})
export class ListaamigosComponent implements OnInit {
  
  amigos: Amigo[] = [];
  cargando = true; //  para mostrar mensaje de carga

  constructor(private servicios: Servicios) {}

  ngOnInit(): void {
    //  Usamos el Promise del servicio
    this.servicios.getAmigos().then((data) => {
      this.amigos = data;
      this.cargando = false; // se desactiva el "cargando"
    });
  }
}
