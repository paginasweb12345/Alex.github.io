import { Routes } from '@angular/router';
import { Home } from './Paginas/home/home';
import { Academico } from './Paginas/academico/academico';
import { Aspiraciones } from './Paginas/aspiraciones/aspiraciones';
import { Hobbies } from './Paginas/hobbies/hobbies';
import { Programacion } from './programacion/programacion';
import { About } from './about/about';
import { Ciberseguridad } from './ciberseguridad/ciberseguridad';
import { Futuro } from './futuro/futuro';
import { Galeria } from './galeria/galeria';
import { Investigacion } from './investigacion/investigacion';
import { Viajes } from './viajes/viajes';
import { Numeros } from './numeros/numeros';
import { Metas } from './metas/metas';
import { Logros } from './logros/logros';
import { ListaamigosComponent } from './listaamigos/listaamigos';


export const routes: Routes = [
    {path: '', component:Home },
    {path: 'academico', component:Academico },
    {path: 'aspiraciones', component:Aspiraciones},
    {path: 'hobbies', component:Hobbies},
    {path: 'about', component:About},
    {path: 'ciberseguridad', component:Ciberseguridad},
    {path: 'futuro', component:Futuro},
    {path: 'galeria', component:Galeria},
    {path: 'investigacion', component:Investigacion},
    {path: 'logros', component:Logros},
    {path: 'metas', component:Metas},
    {path: 'numeros', component:Numeros},
    {path: 'programacion', component:Programacion},
    {path: 'viajes', component:Viajes},
    {path: 'listaamigos', component:ListaamigosComponent},
    {path: '**', redirectTo: ''}
];
