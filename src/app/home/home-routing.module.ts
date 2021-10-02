import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CuadroDeMandoComponent } from './cuadro-de-mando/cuadro-de-mando.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'mimodulo',
    loadChildren: () => import('./mi-modulo/mi-modulo.module').then(m => m.MiModuloModule)
  },
  { path: 'inicio', component: HomeComponent },
  { path: 'bsc', component: CuadroDeMandoComponent },
  


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
