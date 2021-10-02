import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  nombre = "Katerin";
  edad = 22;
  private numero = 10;

  HabilitarInput = false;

  RegistroUsuario = false; 

  getRegistroUsu(){
    this.RegistroUsuario = true;
  }

  getNumero (){
    return this.numero;
  }
  ingresarC(value:String){

  }

  constructor() { }

  ngOnInit() {
  }

}
