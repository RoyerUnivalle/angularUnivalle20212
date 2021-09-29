import { flatten } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  colocarTexto(value:string){
  }


  habilitarCuadroTextoProperty=true;

  usuarioRegistrado=false;

  textoDeRegistro="no hay nadie registrado";

  Empresa="Google";

  getRegistroUsuario(){

    this.usuarioRegistrado=false;


  }


  SetUsuarioRegistrado(event:Event){

    //alert("el usuario se acaba de registar")
    //this.textoDeRegistro="El usuario se acaba de registrar";

    if((<HTMLInputElement>event.target).value=="si"){

      this.textoDeRegistro="El usuario se acaba de registrar";

    }else{

      this.textoDeRegistro="No hay nadie registrado";


    }


  }

  cambiaEmpresa(event:Event){

    this.Empresa=(<HTMLInputElement>event.target).value;


  }

  constructor() { }

  ngOnInit() {
  }

}
