import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import {Router} from '@angular/router';

@Component({
  selector: 'app-agg-estudiante',
  templateUrl: './agg-estudiante.component.html',
  styleUrls: ['./agg-estudiante.component.css']
})
export class AggEstudianteComponent implements OnInit {
  dateLength = 10;
  today = new Date().toISOString().substring(0, this.dateLength);
  formGroup = this.formBuilder.group({
    name: ['', Validators.required],
    patronus: '',
    dateOfBirth: this.today,
    image: ['', Validators.required]
  });

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AggEstudianteComponent>,
    private _snackBar: MatSnackBar,
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  aggEstudianteForm(){
    let estudiante = this.formGroup.value;
    console.log(estudiante);
    //Guardamo datos de manera local
    window.sessionStorage.setItem("name", estudiante['name']);
    window.sessionStorage.setItem("dateOfBirth", estudiante['dateOfBirth']);
    window.sessionStorage.setItem("patronus", estudiante['patronus']);
    window.sessionStorage.setItem("image", estudiante['image']);
    //Mensaje al usuario
    this._snackBar.open('Datos guardados con Exito!', 'ok', {duration: 3000,});
    this.router.navigate(['nuevo-ingreso']);
    this.onNoClick();
  }

}
