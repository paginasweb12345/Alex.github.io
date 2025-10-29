import { Injectable } from '@angular/core';

export interface Amigo {
  nombre: string;
  deporte: String;
  hobbies: string[];
}

@Injectable({
  providedIn: 'root'
})
export class Servicios {

  // Lista de amigos
  private amigos: Amigo[] = [
    { nombre: 'Cristhian Omar Alhuay Uquiche', deporte: 'futbol', hobbies: ['Fútbol', 'Videojuegos', 'Cine', 'fiesta', 'correr'] },
    { nombre: 'Ruth Lisbeth Alhuay Uquiche', deporte: 'Basketball', hobbies: ['Leer', 'Viajar', 'videojuegos', 'cine', 'correr'] },
    { nombre: 'mario alhuay quispe', deporte: 'Natacion', hobbies: ['Pintura', 'Yoga', 'saltar', 'correr', 'gimnasio'] }
  ];

  constructor() { }

  // Método para obtener todos los amigos (simula carga con Promise)
  getAmigos(): Promise<Amigo[]> {
    return new Promise((resolve) => {
      console.log(' Cargando lista de amigos...');
      setTimeout(() => {
        console.log(' Lista cargada correctamente');
        resolve(this.amigos);
      }, 1500); // 1.5 segundos simulando carga
    });
  }



}
