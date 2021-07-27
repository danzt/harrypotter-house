import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nuevo-ingreso',
  templateUrl: './nuevo-ingreso.component.html',
  styleUrls: ['./nuevo-ingreso.component.css']
})
export class NuevoIngresoComponent implements OnInit {

  nombre: string = window.sessionStorage.getItem("name");
  image: string = window.sessionStorage.getItem("image");
  patronus: string = window.sessionStorage.getItem("patronus");
  dateOfBirth: string = window.sessionStorage.getItem("dateOfBirth");

  constructor() { }

  ngOnInit(): void {
  }

}
