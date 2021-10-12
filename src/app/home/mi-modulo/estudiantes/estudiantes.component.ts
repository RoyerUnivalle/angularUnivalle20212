import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/hero.service';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.scss']
})
export class EstudiantesComponent implements OnInit {

  public data: any
  constructor(private servicio: HeroService, private estudiantes: EstudiantesComponent) { }

  ngOnInit() {
  }

imprimirArray(){
  console.log (this.estudiantes)
}

  getDataController(){
    this.servicio.getData()
    .subscribe(
      response => {
        console.log (response)
        this.data = response.estudiantes
      }
    )
  }

}
