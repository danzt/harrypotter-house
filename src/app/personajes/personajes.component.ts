import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import { MatRadioChange } from '@angular/material/radio';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ServiciosService } from '../servicios.service';

export interface datosPersonajes {
  name: string;
  patronus: string;
  yearOfBirth: string;
  image: string;
}

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  displayedColumns: string[] = ['image', 'name', 'patronus', 'yearOfBirth'];
  dataSource: MatTableDataSource<datosPersonajes>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  //Variables para contenido
  loading: boolean = true;
  casa: string = 'slytherin';

  constructor(
    private _servicio: ServiciosService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.obtenerdatos();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  obtenerdatos(){
    this.loading = true;
    this._servicio.obtenerCasa(this.casa).subscribe(
      (res: any) => {
        console.log(res);
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }, (err: any) => {
        console.log(err);
        this._snackBar.open('Error al obtener datos', 'ok', {duration: 3000,});
      },() => {
        this.loading = false;
      }
    );
  }

  cambioDeCasa(evento: MatRadioChange){
    this.casa = evento.value;
    this.obtenerdatos();
  }

}
