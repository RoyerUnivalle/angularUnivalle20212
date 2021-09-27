import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { CuadroDeMandoComponent } from './cuadro-de-mando/cuadro-de-mando.component';


@NgModule({
  declarations: [HomeComponent, CuadroDeMandoComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
