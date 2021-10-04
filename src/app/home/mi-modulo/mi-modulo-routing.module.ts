import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MiModuloComponent } from './mi-modulo/mi-modulo.component';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';
const routes: Routes = [
  {
    path: '',
    component: MiModuloComponent,
    children: [
      { path: 'estudiantes', component: EstudiantesComponent },
    ]
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [RouterModule.forChild(routes)]
  ]
})
export class MiModuloRoutingModule { }
