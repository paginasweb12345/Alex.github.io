import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-academico',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './academico.html',
  styleUrls: ['./academico.css']
})
export class Academico {
  titulo = 'Mi Trayectoria Académica';
  subtitulo1 = 'educación actual';
  subtitulo2 = 'cursos y certificaciones';
  subtitulo3 = 'proyectos académicos';
  carrera = 'ingeniería de sistemas';
  cursos = 'desarrollo web, ciberseguridad';
  especialidad = 'devops';
  proyecto = 'sistema de consulta de libros';
  tema = 'rendimiento académico';
  frase = 'El conocimiento no solo se adquiere, se construye día a día.';
}
