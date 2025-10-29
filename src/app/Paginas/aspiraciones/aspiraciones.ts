import { Component } from '@angular/core';
import { CommonModule, UpperCasePipe, TitleCasePipe, DatePipe, CurrencyPipe, PercentPipe } from '@angular/common';

@Component({
  selector: 'app-aspiraciones',
  standalone: true,
  templateUrl: './aspiraciones.html',
  styleUrls: ['./aspiraciones.css'],
  imports: [
    CommonModule,
    UpperCasePipe,
    TitleCasePipe,
    DatePipe,
    CurrencyPipe,
    PercentPipe
  ]
})
export class Aspiraciones {
  nombre = 'alex';
  profesion = 'ingeniero de sistemas';
  fecha = new Date();
  monto = 12500.756;
  progreso = 0.87;
  frase = 'el futuro pertenece a quienes creen en la belleza de sus sueños';
  habilidades = ['Ciberseguridad', 'IA', 'Cloud', 'DevOps'];
  datos = { meta: 'Innovar con IA aplicada a la educación', anio: 2025 };
}
