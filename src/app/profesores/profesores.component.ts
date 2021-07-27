import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AggEstudianteComponent } from '../componentes/agg-estudiante/agg-estudiante.component';
import { datosPersonajes } from '../personajes/personajes.component';
import { ServiciosService } from '../servicios.service';

@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.css']
})
export class ProfesoresComponent implements OnInit {
  displayedColumns: string[] = ['image', 'name', 'patronus', 'yearOfBirth'];
  dataSource: MatTableDataSource<datosPersonajes>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  loading: boolean = true;

  constructor(
    private _servicio: ServiciosService,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.obtenerdatos();
  }

  obtenerdatos(){
    this.loading = true;
    this._servicio.obtenerProfesores().subscribe(
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

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
