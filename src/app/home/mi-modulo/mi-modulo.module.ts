import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MiModuloRoutingModule } from './mi-modulo-routing.module';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';



@NgModule({
  declarations: [EstudiantesComponent],
  imports: [
    CommonModule,
    MiModuloRoutingModule,
  ]
})
export class MiModuloModule { }
