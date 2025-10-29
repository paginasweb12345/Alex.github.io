import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.css'], 
  standalone: true,           
  imports: [FormsModule, CommonModule] 
})
export class Home {
  nombre: string = '';
  apellido: string = '';
  numero: string = '';
  correo: string = '';

  saludo: string = ''; // <-- nueva variable para mostrar el saludo

  empezar() {
    if (this.nombre && this.apellido) {
      this.saludo = `¡Hola ${this.nombre} ${this.apellido}! Bienvenido.`;
    } else {
      this.saludo = 'Por favor, completa Nombre y Apellido.';
    }
    alert(`Bienvenido ${this.nombre} ${this.apellido}`);
  }
}
