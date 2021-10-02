import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { EstudiantesComponent } from './estudiantes/estudiantes.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: ' ',
    pathMatch: 'full'
  },
  { path: 'estudiantes', component: EstudiantesComponent },
];

@NgModule({
  declarations: [],
  imports: [
    [RouterModule.forChild(routes)],
    CommonModule
  ]
})
export class MiModuloRoutingModule { }
