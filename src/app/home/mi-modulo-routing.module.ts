import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { EstudiantesComponent } from './mi-modulo/estudiantes/estudiantes.component';
import { MiModuloModule } from './mi-modulo/mi-modulo.module';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  { path: 'estudiantes', component: EstudiantesComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class MiModuloRoutingModule { }
