import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MiModuloRoutingModule } from './mi-modulo-routing.module';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';
import { MiModuloComponent } from './mi-modulo/mi-modulo.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [MiModuloComponent, EstudiantesComponent],
  imports: [
    RouterModule,
    CommonModule,
    MiModuloRoutingModule,
  ]
})
export class MiModuloModule { }
