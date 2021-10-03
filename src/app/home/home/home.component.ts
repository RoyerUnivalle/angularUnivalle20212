import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  name = "Andrés";
  last_name = "Jaramillo";
  aka = "Sr_Pio";
  edad = 21;


  colorLetra = "#2a9d8f"

  constructor() { }

  ngOnInit() {
  }

}
